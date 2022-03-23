import React, { useEffect, useState, useRef, SetStateAction } from 'react'
import style from './Checkout.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ReactMapGL, { Marker } from 'react-map-gl'
import * as parkDate from "./mapData/skateboard-parks.json";
// import icons
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { MdPlace } from 'react-icons/md'
import { FaStickyNote } from 'react-icons/fa'
import { FaStore } from 'react-icons/fa'
import { IoCloseCircle } from 'react-icons/io5'
import imgButton from './mapData/checkmapimgs/mapbox-marker-icon-20px-orange.png';
import { GiConsoleController } from 'react-icons/gi'

const Checkout = () => {
  const [show, setShow] = useState<boolean>(false)
  const [promotionShow, setPromotionShow] = useState<boolean>(false)
  const [checkSearchBox, setCheckSearchBox] = useState<boolean>(false)
  const [checkTime, setCheckTime] = useState<boolean>(true)
  const [hour, setHour] = useState<string>('')
  const [minute, setMinute] = useState<string>('')
  const hourRef = useRef(null);
  const minuteRef = useRef(null);
  const coldcheckedRef = useRef(null);
  const momocheckedRef = useRef(null);
  const momoMarkRadio = useRef(null);
  const coldMarkRadio = useRef(null);
  const noteRef = useRef(null);
  const mapCheckoutRef = useRef(null);
  useEffect(() => {
    (momoMarkRadio.current as any).style.backgroundColor = '#d8b979'
  }, [])
  const handleOnlButton = () => {
    (noteRef.current as any).classList.remove(`${style.hide}`);
    (mapCheckoutRef.current as any).classList.remove(`${style.hide}`);
  }
  const handleOffButton = () => {
    (noteRef.current as any).classList.toggle(`${style.hide}`);
    (mapCheckoutRef.current as any).classList.toggle(`${style.hide}`);
  }
  const handleSetTimeSelected = () => {
    setShow(false);
    setCheckTime(false);
    (hourRef.current as any).innerHTML = hour;
    (minuteRef.current as any).innerHTML = minute;
  }
  const handlePromotionCode = () => {
    setPromotionShow(true);
  }
  const handleColdSelectedRadio = () => {
    (coldcheckedRef.current as any).checked = true;
    (momoMarkRadio.current as any).style.backgroundColor = '#eee';
    (coldMarkRadio.current as any).style.backgroundColor = '#d8b979';
    (momoMarkRadio.current as any).classList.remove(`${style.noHover}`);
    (coldMarkRadio.current as any).classList.toggle(`${style.noHover}`);
  }
  const handleMomoSelectedRadio = () => {
    (momocheckedRef.current as any).checked = true;
    (coldMarkRadio.current as any).style.backgroundColor = '#eee';
    (momoMarkRadio.current as any).style.backgroundColor = '#d8b979';
    (coldMarkRadio.current as any).classList.remove(`${style.noHover}`);
    (momoMarkRadio.current as any).classList.toggle(`${style.noHover}`);
  }
  const {
    register,
    handleSubmit
  } = useForm();
  const OnSubmit = (data: any) => {
    console.log(data);
  }
  const today = new Date();
  // map
  const [searchAddress, setSearchAddress]= useState<string>("")
  const printAddress=()=>{

  }
  const [list, setList]= useState<any>([])
  const handleAddressChange=(e:any)=>{
    //checksearchbox nen de mot lan
    setSearchAddress(e.target.value);
    if(searchAddress){
    setCheckSearchBox(true);
    let arr = mapPoints.features;
    let b=[...arr]
      b = b.filter((e1:any)=>{e1.properties.name.includes('v')});
      console.log(searchAddress, b)
      setList([...b]);
      console.log(list);
      //can nhac dung use memo 
    }
  }
  const mapPoints = 
    {
      type: 'FeatureCollection',
      features: [
        {
          type: "Feature",
          properties: { id: "1", name:"vuong" }, 
          geometry: { type: 'Point', coordinates: [-75.3372987731628, 45.383321536272049] }
        }
      ]
    }
  const MAPBOX_TOKEN: string = process.env.REACT_APP_MAPBOX_TOKEN || '';
  const [viewport, setViewport] = useState({
    width: 500,
    height: 200,
    latitude: 45.4211,
    longitude: -75.6983,
    zoom: 10
  });

  return (
    <div>
      <div className={style.pageCheckout}>
        <Container className={style.container}>
          <div className={style.doubleButton}>
            <button onClick={() => { handleOnlButton() }} className={`${style.singleButton} ${style.active}`}>Giao hàng tận nơi</button>
            <button onClick={() => { handleOffButton() }} className={style.singleButton}>Nhận tại cửa hàng</button>
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
                  <form onSubmit={handleSubmit(OnSubmit)}>
                    <div className={style.wrapInput}>
                      <div className={style.wrapInputIcon}>
                        <BsFillPersonFill />
                      </div>
                      <input {...register("name")} type="text" id={style['customerName']} placeholder='Tên người nhận' />
                    </div>
                    <div className={style.wrapInput}>
                      <div className={style.wrapInputIcon}>
                        <AiFillPhone />
                      </div>
                      <input {...register("phone")} type="text" id={style['customerPhone']} placeholder='Số điện thoại người nhận' />
                    </div>
                    <div className={style.deliveryLocation}>
                      <div className={style.deliveryLocationTitle}>Giao đến</div>
                      <div className={`${style.wrapInput} ${style.wrapLocation}`}>
                        <div className={style.wrapInputIcon}>
                          <MdPlace />
                        </div>
                        <input {...register("location")} value={searchAddress} onChange={(e) => { handleAddressChange(e) }} type="text" id={style['customerLocation']} placeholder="Địa chỉ người nhận" />
                        {checkSearchBox && <div className={style.searchBox}>
                          <div onClick={() => { setCheckSearchBox(false) }} className={style.timePopUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
                          {}
                        </div>}
                      </div>
                      <div ref={noteRef} className={`${style.wrapInput} ${style.wrapNote}`}>
                        <div className={style.wrapInputIcon} >
                          <FaStickyNote />
                        </div>
                        <input {...register("note")} type="text" id={style['customerNote']} placeholder="Ghi chú địa chỉ..." />
                      </div>
                    </div>
                  </form>
                  <div ref={mapCheckoutRef} id={style['mapCheckout']}>
                    <ReactMapGL
                      {...viewport}
                      mapboxAccessToken={MAPBOX_TOKEN}
                      mapStyle="mapbox://styles/vuongpham/cl127tbw0003q15p6xvieicp6"
                      onDrag={(newViewport: any) => setViewport(newViewport)}
                      onWheel={(newViewport: any) => setViewport(newViewport)}
                    >
                      {mapPoints.features.map((park: any) => (<Marker
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
                        {checkTime && today.getHours() || <span className={style.hour} ref={hourRef}>21</span>}
                        :
                        {checkTime && today.getMinutes() || <span className={style.minute} ref={minuteRef}>55</span>}
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
                      <input ref={momocheckedRef} type="radio" checked name="type" value="momo" />
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
                    <div className={style.chooseStoreContent}>
                      <div className={style.left}>
                        <FaStore />
                        <div className={style.storeName}></div>
                      </div>
                      <div className={style.right}>
                        <div className={style.distance}></div>
                        <input type="hidden" name="distance" />
                        <MdKeyboardArrowDown />
                      </div>
                    </div>
                  </div>
                  <div className={style.listCheckout}>
                    <div className={style.productCheckout}>
                      <img src="https://tocotocotea.com/wp-content/uploads/2021/12/Hình-ảnh-sp-website_1000x1000_hồng-trà-ngũ-cốc-kem-cafe.png" alt="" />
                      <div className={style.productCheckoutContent}>
                        <div className={style.title}>Hồng Trà Ngũ Cốc Kem Cafe (M)</div>
                        <div className={style.customizations}>100% đá, 100% đường,</div>
                        <div className={style.quantity}>44,000đ x 1= 44,000đ</div>
                      </div>
                    </div>
                  </div>
                  <div className={style.promotionCode}>
                    <div className={style.left}>
                      <img src="https://tocotocotea.com/wp-content/themes/tocotocotea/assets/images/icon-promotion.png" alt="" />
                      <div className={style.text}>Mã khuyến mại</div>
                    </div>
                    <div className={style.right}>
                      <button type="button" onClick={() => { handlePromotionCode() }} className={style.btnAddVoucher}>Thêm khuyến mại</button>
                    </div>
                  </div>
                  <div className={style.checkoutPrice}>
                    <div className={style.priceTop}>
                      <div className={style.quantity}>
                        "Số lượng cốc: "
                        <span className={style.quantityNumber}>1</span>
                        " cốc"
                      </div>
                      <div className={style.total}>
                        <div className={style.totalTitle}>Tổng:</div>
                        <div className={`${style.txtRight} ${style.totalNumber}`}>44,000đ</div>
                      </div>
                    </div>
                    <div className={style.transportPrice}>
                      <div className={style.transportPriceTitle}>Phí vận chuyển:</div>
                      <div className={style.txtRight}>0đ</div>
                    </div>
                    <div className={style.promotionAmount}>
                      <div className={style.promotionAmountTitle}>Khuyến mãi:</div>
                      <div className={style.txtRight}>0đ</div>
                    </div>
                    <div className={style.grandTotal}>
                      <div className={style.grandTotalTitle}>Tổng cộng:</div>
                      <div className={`${style.txtRight} ${style.grandTotalNumber}`}>44,000đ</div>
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
        </Container>
      </div>
      <div>
        {
          show && <div className={style.editDeliveryTimePopUp}>
            <div className={style.timePopUpTitle}>Thời gian giao hàng</div>
            <div onClick={() => { setShow(false) }} className={style.timePopUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
            <div className={style.timePopUpContent}>
              <div className={style.timePopUpWrap}>
                <div className={style.wrapSelectTime}>
                  <select onChange={(e: any) => { setHour(e.target.value) }} name="hour" className={style.hour}>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                  </select>
                  <select onChange={(e: any) => { setMinute(e.target.value) }} name="minute" className={style.minute}>
                    <option value="0">00</option>
                    <option value="5">05</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                  </select>
                </div>
                <button onClick={() => { handleSetTimeSelected() }} type="button" className={style.wrapSelectTimeBtn}>XONG</button>
              </div>
            </div>
          </div>
        }
        {show && <div className={style.overlay}></div>}
      </div>
      <div>
        {
          promotionShow && <div className={style.promotionPopup}>
            <div className={style.promotionPopupTitle}>Khuyến mãi</div>
            <div onClick={() => { setPromotionShow(false) }} className={style.timePopUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
            <div className={style.timePopUpContent}>
              <div className={style.timePopUpWrap}>
                <div className={style.wrapPromotionPopup}>
                  <input name="promotionCodePopup" placeholder="Nhập mã khuyến mãi của bạn..." className={style.promotionCodePopup} />
                  <button type="button" className={style.wrapPromotionPopupBtn}>Sử dụng</button>
                </div>
                <div className={style.promotionPopupContent}>
                  {/* lồng toán tử || vào khi có mã khuyến mãi */}
                  <div>Bạn không có mã khuyến mãi nào!</div>
                </div>
              </div>
            </div>
          </div>
        }
        {promotionShow && <div className={style.promotionOverlay}></div>}
      </div>
    </div >
  )
}

export default Checkout