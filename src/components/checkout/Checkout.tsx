import { useEffect, useState, useRef } from 'react'
import style from './Checkout.module.css'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ReactMapGL, { Marker } from 'react-map-gl'
import PaypalCheckoutButton from './payment/PaypalCheckoutButton'
import { User, Cart, Feature, Properties } from './models'
// popups
import DeliveryTimePopup from './popup/DeliveryTimePopup'
import PromotionCodePopup from './popup/PromotionCodePopup'
import ChooseStorePopup from './popup/ChooseStorePopup'
import SuccessOrderPopup from './popup/SuccessOrderPopup'
import BackToLoginPupop from './popup/BackToLoginPupop'
import CheckCartPopup from './popup/CheckCartPopup'
import SearchBoxPopup from './popup/SearchBoxPopup'
// import icons
import { MdKeyboardArrowDown, MdPlace } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { FaStickyNote, FaStore } from 'react-icons/fa'
import { IoCloseCircle, IoClose } from 'react-icons/io5'
import imgButton from './mapData/checkmapimgs/mapbox-marker-icon-20px-orange.png';
// 
import map from './mapData/Map'
import listStores from './mapData/listStores'

const Checkout:React.FC = () => {
  const [quantity, setQuantity] = useState<number>(0)
  const [price, setPrice] = useState<number>(0)
  const [transFee, setTransFee] = useState<number>(18000);
  const [show, setShow] = useState<boolean>(false)
  const [checkTime, setCheckTime] = useState<boolean>(true)
  const [promotionShow, setPromotionShow] = useState<boolean>(false)
  const [checkSearchBox, setCheckSearchBox] = useState<boolean>(false)
  const [popupChooseStore, setPopupChooseStore] = useState<boolean>(false)
  const [popupSuccessOrder, setPopupSuccessOrder] = useState<boolean>(false)
  const [checkout, setCheckout] = useState<boolean>(false)
  const [hour, setHour] = useState<string>('')
  const [minute, setMinute] = useState<string>('')
  const [error, setError] = useState<string>("")
  const [login, setLogin] = useState<boolean>(false)
  const [backToLogin, setBackToLogin] = useState<boolean>(false)
  const [checkCart, setCheckCart] = useState<boolean>(false)
  // 
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const coldcheckedRef = useRef(null);
  const momocheckedRef = useRef(null);
  const momoMarkRadio = useRef(null);
  const coldMarkRadio = useRef(null);
  const noteRef = useRef(null);
  const mapCheckoutRef = useRef(null);
  const fillStoreChoose = useRef(null);
  const errorModals = useRef<any>(null);
  const [user, setUser] = useState<User>(
    {
      "username": "",
      "password": "",
      "email": "",
      "phone": "",
      "fullName": "",
      "age": 0,
      "avatar": "",
      "address": "",
      "cart": [
      ],
      "orders": [

      ],
      "id": ""
    }
  );
  const api = axios.create({
    baseURL: `https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users`
  })
  const getUser = async () => {
    try {
      let user = await api.get('/50')
        // sau se thay 50 thanh user.id
        .then(({ data }) => data)
      setUser({ ...user })
    }
    catch (err) {
      console.log(" error when get data: ", err)
    }
  }
  const updateOrder = async (value: Cart[]) => {
    let updateUser = await api
      .put(`/50`, [...user.orders,{ orders: value }])
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    let s = 0;
    let p = 0;
    if (user.username) {
      setLogin(true)
      user.cart.map((item) => {
        s = s + item.quantity;
        p += item.price * item.quantity;
      })
    } else {
      setLogin(false)
    }
    setQuantity(s)
    setPrice(p)
  }, [user])
  
  useEffect(() => {
    (momoMarkRadio.current as any).style.backgroundColor = '#d8b979';
    (momocheckedRef.current as any).checked = true;
  }, [])
  // show/hide map and note field
  const handleOnlButton = () => {
    (noteRef.current as any).classList.remove(`${style.hide}`);
    (mapCheckoutRef.current as any).classList.remove(`${style.hide}`);
    setTransFee(18000);
  }
  const handleOffButton = () => {
    (noteRef.current as any).classList.toggle(`${style.hide}`);
    (mapCheckoutRef.current as any).classList.toggle(`${style.hide}`);
    setTransFee(0);
  }
  // 
  const handleSetTimeSelected = () => {
    setShow(false);
    setCheckTime(false);
    (hourRef.current as any).innerHTML = hour;
    (minuteRef.current as any).innerHTML = minute;
  }
  const handlePromotionCode = () => {
    setPromotionShow(true);
  }
  // handle radio checked
  const handleColdSelectedRadio = () => {
    (coldcheckedRef.current as any).checked = true;
    setTransFee(0);
    (momoMarkRadio.current as any).style.backgroundColor = '#eee';
    (coldMarkRadio.current as any).style.backgroundColor = '#d8b979';
    (momoMarkRadio.current as any).classList.remove(`${style.noHover}`);
    (coldMarkRadio.current as any).classList.toggle(`${style.noHover}`);
  }
  const handleMomoSelectedRadio = () => {
    (momocheckedRef.current as any).checked = true;
    setTransFee(18000);
    (coldMarkRadio.current as any).style.backgroundColor = '#eee';
    (momoMarkRadio.current as any).style.backgroundColor = '#d8b979';
    (coldMarkRadio.current as any).classList.remove(`${style.noHover}`);
    (momoMarkRadio.current as any).classList.toggle(`${style.noHover}`);
  }
  // handle stores
  const [storedChoosed, setStoredChoosed] = useState<Properties>({
    name: "",
    distance: ""
  })
  const handleDisplayStoreChoosed = (item: any) => {
    setPopupChooseStore(false);
    let namee = item.properties.name;
    let distancee = item.properties.distance;
    setStoredChoosed({
      name: namee,
      distance: distancee
    })
    setSearchAddressStore("");
    setListStore([])
  }
  const handleSearchStores = (e:any) => {
    setSearchAddressStore(e.target.value);
    let arr: Feature[] = listStores.features;
    let b = [...arr];
    if (searchAddressStore) {
      let searchAddressStoreLow = searchAddressStore.toLowerCase();
      let a = b.filter((item:any) => item.properties.address.toLowerCase().includes(searchAddressStoreLow));
      setListStore([...a]);
    }
  }
  //  
  const handleSubmitOrder = (message: string) => {
    setError(message);
    errorModals.current.style.opacity = 1;
    errorModals.current.style.transform = 'translate(-50%, 150%)';
    setTimeout(() => {
      errorModals.current.style.opacity = 0;
      errorModals.current.style.transform = 'translate(-50%, -100%)';
    }, 2000);
  }
  // 
  const [formData, setFormData] = useState<any>({});
  const {
    register, handleSubmit, formState: { errors }
  } = useForm();
  const today = new Date()
  const OnSubmit = (data: any) => {
    if (user.username) {
      setLogin(true)
      if (storedChoosed.name) {
        if (user.cart.length === 0) {
          setCheckCart(true)
        } else 
        {
          if ((coldcheckedRef.current as any).checked === true) {
            setCheckout(false)
            setPopupSuccessOrder(true)
            user.orders = [...user.cart];
            user.orders.map((item: Cart) => {
              item.paid = true;
            })
            updateOrder(
              user.orders
              // [{
              //   productId: "p1",
              //   name: "tra sua tran chau den",
              //   description: "den da khong duong",
              //   quantity: 1,
              //   productImg: "http://placeimg.com/640/480/people",
              //   price: 23000,
              //   paid: false,
              // }]
            )
            getUser()
          } else
            if ((momocheckedRef.current as any).checked === true) {
              setPopupSuccessOrder(false)
              setCheckout(true)
            }
        }
        if (login) {
          data.fullName = user.fullName
          data.phone = user.phone
          setFormData(data)
        } else {
          setFormData(data);
        }
        console.log("formdata: ", formData);
      }
      else {
        handleSubmitOrder("Vui lòng nhập tên shop!");
      }
    }
    else {
      setLogin(false)
      setBackToLogin(true);
    }
  }

  // map
  const MAPBOX_TOKEN: string = process.env.REACT_APP_MAPBOX_TOKEN || '';
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: -74.3372987731628,
    longitude: 40.383321536272049,
    zoom: 10
  });
  const [searchAddress, setSearchAddress] = useState<string>("")
  const [searchAddressOnClick, setSearchAddressOnClick] = useState<string>("")
  const [list, setList] = useState<Array<any>>([])
  const [searchAddressStore, setSearchAddressStore] = useState<string>("")
  const [listStore, setListStore] = useState<Array<any>>([])
  const handleAddressChange = (e: any) => {
    setViewport({
      ...viewport,
      width: '100%',
      zoom: 10
    })
    //checksearchbox nen de mot lan
    setSearchAddress(e.target.value);
    setCheckSearchBox(true);
    let arr: any = map.features;
    let b = [...arr];
    // console.log(searchAddress)
    if (searchAddress) {
      let searchAddressLow = searchAddress.toLowerCase();
      let a = b.filter((item) => item.properties.fullname.toLowerCase().includes(searchAddressLow));
      setList([...a]);
    }
    //can nhac dung use memo 
  }
  const handleLocationOnClick = (item: any) => {
    setCheckSearchBox(false);
    setViewport({
      ...viewport,
      latitude: item.geometry.coordinates[1],
      longitude: item.geometry.coordinates[0],
      zoom: 15,
      width: '100%'
    })
    setSearchAddress(item.properties.name)
    setSearchAddressOnClick(item.properties.name)
  }
  const handlePopupChooseStore = () => {
    if (searchAddressOnClick) {
      setPopupChooseStore(true)
    }
    else {
      setPopupChooseStore(false)
      handleSubmitOrder("Vui lòng nhập địa chỉ!");
    }
  }
  const VND = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "VND",
  });
  return (
    <div className={style.Checkout}>
      <div className={style.navCheckout}></div>
      <div className={style.pageCheckout}>
        <Container className={style.container}>
          <form onSubmit={handleSubmit(OnSubmit)}>
            <div className={style.doubleButton}>
              <button type="button" onClick={() => { handleOnlButton() }} className={`${style.singleButton} ${style.active}`}>Giao hàng tận nơi</button>
              <button type="button" onClick={() => { handleOffButton() }} className={style.singleButton}>Nhận tại cửa hàng</button>
            </div>
            <Row className={style.checkoutDetail}>
              <Col lg={7} className={style.checkoutDetailLeft}>
                <div className={style.deliveryInfo}>
                  <div className={style.deliveryInfoTitle}>
                    <div className={style.deliveryInfoTitleLeft}>Thông tin giao hàng</div>
                    <div className={style.right}>
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <div className={style.deliveryInfoContent}>

                    <div className={style.wrapInput}>
                      <div className={style.wrapInputIcon}>
                        <BsFillPersonFill />
                      </div>
                      {login
                        ? <input {...register("name", { required: false })} defaultValue={user.fullName} type="text" id={style['customerName']} placeholder='Tên người nhận' />
                        : <input {...register("name", { required: true, pattern: /[A-Za-z]+/ })} type="text" id={style['customerName']} placeholder='Tên người nhận' />}
                      {errors.name?.type === 'required' && (<p style={{ color: 'red' }}>name is required</p>)}
                      {errors.name?.type === 'pattern' && (<p style={{ color: 'red' }}>name is not correct</p>)}
                    </div>
                    <div className={style.wrapInput}>
                      <div className={style.wrapInputIcon}>
                        <AiFillPhone />
                      </div>
                      {login
                        ? <input {...register("phone", { required: false })} defaultValue={user.phone} type="text" id={style['customerPhone']} placeholder='Số điện thoại người nhận' />
                        : <input {...register("phone", { required: true, pattern: /[0][1-9]?[0-9]{8}$/ })} type="text" id={style['customerPhone']} placeholder='Số điện thoại người nhận' />}
                      {errors.phone?.type === 'required' && <p style={{ color: 'red' }}>your telephone is required</p>}
                      {errors.phone?.type === 'pattern' && (<p style={{ color: 'red' }}>phone is not correct</p>)}
                    </div>
                    <div className={style.deliveryLocation}>
                      <div className={style.deliveryLocationTitle}>Giao đến</div>
                      <div className={`${style.wrapInput} ${style.wrapLocation}`}>
                        <div className={style.wrapInputIcon}>
                          <MdPlace />
                        </div>
                        <input {...register("location")} value={searchAddress} onChange={(e) => { handleAddressChange(e) }} type="text" id={style['customerLocation']} placeholder="Địa chỉ người nhận" />
                        {checkSearchBox && <SearchBoxPopup
                        setCheckSearchBox={(a: boolean)=>{ setCheckSearchBox(a) }} 
                        searchAddress={searchAddress} 
                        list={list} handleLocationOnClick={(a:any)=>{handleLocationOnClick(a)}}
                        />}
                        {/* {checkSearchBox && <div className={style.searchBox}>
                          <div onClick={() => { setCheckSearchBox(false) }} className={style.timePopUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
                          {searchAddress && list.map((item) => {
                            return (
                              <div key={item.properties.id} onClick={() => { handleLocationOnClick(item) }} className={style.searchItem}>
                                <div className={style.name}>{item.properties.name}</div>
                                <div className={style.fullname}>{item.properties.fullname}</div>
                              </div>)
                          })} */}
                        {/* </div> */}
                      </div>
                      <div ref={noteRef} className={`${style.wrapInput} ${style.wrapNote}`}>
                        <div className={style.wrapInputIcon} >
                          <FaStickyNote />
                        </div>
                        <input {...register("note")} type="text" id={style['customerNote']} placeholder="Ghi chú địa chỉ..." />
                      </div>
                    </div>
                    <div ref={mapCheckoutRef} id={style['mapCheckout']}>
                      <ReactMapGL
                        className={style.mapCheckoutChild}
                        {...viewport}
                        mapboxApiAccessToken={MAPBOX_TOKEN}
                        mapStyle="mapbox://styles/vuongpham/cl127tbw0003q15p6xvieicp6"
                        onViewportChange={(newViewport: any) => setViewport({ ...newViewport, width: '100%' })}
                      >
                        {map.features.map((park: any) =>
                        (<Marker
                          key={park.properties.id}
                          latitude={park.geometry.coordinates[1]}
                          longitude={park.geometry.coordinates[0]}
                        >
                          <button className={style.mapButton}>
                            <img src={imgButton} alt=" img button" />
                          </button>
                        </Marker>))}
                      </ReactMapGL>
                    </div>
                    <div className={style.deliveryDateTime}>
                      <div className={style.left}>

                        <span>Giao hàng </span>
                        <span className={style.time}>
                          {(checkTime && today.getHours()) || <span className={style.hour} ref={hourRef}>21</span>}
                          :
                          {(checkTime && today.getMinutes()) || <span className={style.minute} ref={minuteRef}>55</span>}
                        </span>
                        <span> - hôm nay </span>
                        {<span>{`${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`}</span> || <span className={style.date}>18/03/2022</span>}
                      </div>
                      <div onClick={() => setShow(true)} className={`${style.right} ${style.editDeliveryTime}`}>Sửa</div>
                    </div>
                  </div>
                </div>
                <div className={`${style.deliveryInfo} ${style.paymentMethod}`}>
                  <div className={style.deliveryInfoTitle}>
                    <div className={style.deliveryInfoTitleLeft}>Phương thức thanh toán</div>
                    <div className={style.right}>
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <div className={style.deliveryInfoContent}>
                    <div className={style.paymentContent}>
                      <label onClick={() => handleColdSelectedRadio()} htmlFor="" className={style.containerRadio}>
                        <span>Thanh toán khi nhận hàng</span>
                        <input ref={coldcheckedRef} type="radio" name="type" value="cold" />
                        <span ref={coldMarkRadio} className={style.checkmarkRadio}></span>
                      </label>
                      <label onClick={() => handleMomoSelectedRadio()} htmlFor="" className={`${style.containerRadio} ${style.momoPayment}`}>
                        <span>Thanh toán qua momo</span>
                        <input ref={momocheckedRef} type="radio" name="type" value="momo" />
                        <span ref={momoMarkRadio} className={`${style.checkmarkRadio}`}></span>
                      </label>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={5} className={style.checkoutDetailRight}>
                <div className={`${style.deliveryInfo} ${style.orderInfo}`}>
                  <div className={style.deliveryInfoTitle}>
                    <div className={style.deliveryInfoTitleLeft}>Thông tin đơn hàng</div>
                    <div className={style.right}>
                      <MdKeyboardArrowDown />
                    </div>
                  </div>
                  <div className={style.deliveryInfoContent}>
                    <div className={style.chooseStore}>
                      <div className={style.chooseStoreTitle}>Chọn cửa hàng</div>
                      <div onClick={() => { handlePopupChooseStore() }} className={style.chooseStoreContent}>
                        <div className={style.left}>
                          <FaStore />
                          <div className={style.storeName}>{storedChoosed.name}</div>
                        </div>
                        <div className={style.right}>
                          <div className={style.distance}>{storedChoosed.distance}</div>
                          <input type="hidden" name="distance" />
                          <MdKeyboardArrowDown />
                        </div>
                      </div>
                    </div>
                    <div className={style.listCheckout}>
                      {user.cart.length > 0 ?
                        user.cart.map((cartItem) => {
                          return (
                            <div className={style.productCheckout}>
                              <img src={cartItem.productImg} alt="product image" />
                              <div className={style.productCheckoutContent}>
                                <div className={style.title}>{cartItem.name}</div>
                                <div className={style.customizations}>{cartItem.description}</div>
                                <div className={style.quantity}>{VND.format(cartItem.price)} x {cartItem.quantity}= {VND.format(cartItem.price * cartItem.quantity)}</div>
                              </div>
                            </div>
                          )
                        }) : <div className={style.noProductCheckout}>Không có sản phẩm nào!!!</div>}
                    </div>
                    <div className={style.promotionCode}>
                      <div className={style.left}>
                        <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-promotion.png" alt="" />
                        <div className={style.text}>Mã khuyến mại</div>
                      </div>
                      <div className={style.right}>
                        {login && <button type="button" onClick={() => { handlePromotionCode() }} className={style.btnAddVoucher}>Thêm khuyến mại</button>}
                      </div>
                    </div>
                    <div className={style.checkoutPrice}>
                      <div className={style.priceTop}>
                        <div className={style.quantity}>
                          "Số lượng cốc: "
                          <span className={style.quantityNumber}>{quantity}</span>
                          " cốc"
                        </div>
                        <div className={style.total}>
                          <div className={style.totalTitle}>Tổng:</div>
                          <div className={`${style.txtRight} ${style.totalNumber}`}>{VND.format(price)}</div>
                        </div>
                      </div>
                      <div className={style.transportPrice}>
                        <div className={style.transportPriceTitle}>Phí vận chuyển:</div>
                        <div className={style.txtRight}>{VND.format(transFee)}</div>
                      </div>
                      <div className={style.promotionAmount}>
                        <div className={style.promotionAmountTitle}>Khuyến mãi:</div>
                        <div className={style.txtRight}>0đ</div>
                      </div>
                      <div className={style.grandTotal}>
                        <div className={style.grandTotalTitle}>Tổng cộng:</div>
                        <div className={`${style.txtRight} ${style.grandTotalNumber}`}>{VND.format(price + transFee)}</div>
                      </div>
                    </div>
                    <div className={style.checkoutNote}>
                      <textarea placeholder="Thêm ghi chú..." className={style.taCheckoutNote}></textarea>
                    </div>
                    <div className={style.wrapCheckoutBtn}>
                      <button type="submit" className={style.btnOrder}>ĐẶT HÀNG</button>
                      <button className={style.btnBackToMenu}><Link to="/">TIẾP TỤC MUA HÀNG</Link></button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
        {checkout && <div className={style.paypalCheckoutMethod} onClick={() => { setCheckout((false)) }}>
          <div className={style.paypalCheckoutButton}>
            <PaypalCheckoutButton updateOrd={(order: Cart[]) => updateOrder(order)} products={user} />
          </div>
        </div>}
      </div>
      {/* popup */}
      {show && <DeliveryTimePopup setShow={(a: boolean) => { setShow(a) }} setHour={(a: string) => { setHour(a) }} setMinute={(a: string) => { setMinute(a) }} handleSetTimeSelected={() => { handleSetTimeSelected() }} />}
      {promotionShow && <PromotionCodePopup setPromotionShow={(a: boolean) => { setPromotionShow(a) }} />}
      {popupChooseStore && <ChooseStorePopup
        setPopupChooseStore={(a: boolean) => { setPopupChooseStore(a) }}
        handleSearchStores={(e: any) => { handleSearchStores(e) }}
        listStore={listStore}
        handleDisplayStoreChoosed={(item: any) => { handleDisplayStoreChoosed(item) }}
        fillStoreChoose={fillStoreChoose}
        searchAddressStore={searchAddressStore} />}
      {/* error modals */}
      <div ref={errorModals} className={style.errorModal}>
        <div className={style.errorMessage}>{error}</div>
        <div className={style.errorIcon}><IoClose /></div>
      </div>
      {/* order success message */}
      {popupSuccessOrder && <SuccessOrderPopup setPopupSuccessOrder={(a: boolean) => { setPopupSuccessOrder(a) }} />}
      {backToLogin && <BackToLoginPupop setBackToLogin={(a: boolean) => { setBackToLogin(a) }} setPopupSuccessOrder={(a: boolean) => { setPopupSuccessOrder(a) }}/>}
      {checkCart && <CheckCartPopup/>}
    </div >
  )
}

export default Checkout