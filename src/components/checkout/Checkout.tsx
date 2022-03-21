import React from 'react'
import style from './Checkout.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
// import icons
import { MdKeyboardArrowDown } from 'react-icons/md'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillPhone } from 'react-icons/ai'
import { MdPlace } from 'react-icons/md'
import { FaStickyNote } from 'react-icons/fa'
import { FaStore } from 'react-icons/fa'
import { IoCloseCircle } from 'react-icons/io5'
const Checkout = () => {
  const handleEditDeliveryTime = () => {

  }
  return (
    <div>
      <div className={style.pageCheckout}>
        <Container className={style.container}>
          <div className={style.doubleButton}>
            <button className={style.singleButton}>Giao hàng tận nơi</button>
            <button className={style.singleButton}>Nhận tại cửa hàng</button>
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
                    <input type="text" id={style['customerName']} placeholder='Tên người nhận' />
                  </div>
                  <div className={style.wrapInput}>
                    <div className={style.wrapInputIcon}>
                      <AiFillPhone />
                    </div>
                    <input type="text" id={style['customerPhone']} placeholder='Số điện thoại người nhận' />
                  </div>
                  <div className={style.deliveryLocation}>
                    <div className={style.deliveryLocationTitle}>Giao đến</div>
                    <div className={`${style.wrapInput} ${style.wrapLocation}`}>
                      <div className={style.wrapInputIcon}>
                        <MdPlace />
                      </div>
                      <input type="text" id={style['customerLocation']} placeholder="Địa chỉ người nhận" />
                    </div>
                    <div className={`${style.wrapInput} ${style.wrapNote}`}>
                      <div className={style.wrapInputIcon} >
                        <FaStickyNote />
                      </div>
                      <input type="text" id={style['customerNote']} placeholder="Ghi chú địa chỉ..." />
                    </div>
                    <div id={style['mapCheckout']}>

                    </div>
                  </div>
                  <div className={style.deliveryDateTime}>
                    <div className={style.left}>
                      <span>Giao hàng </span>
                      <span className={style.time}>
                        <span className={style.hour}>21</span>
                        :
                        <span className={style.minute}>55</span>
                      </span>
                      <span> - hôm nay </span>
                      <span className={style.date}>18/03/2022</span>
                    </div>
                    <div onClick={() => handleEditDeliveryTime()} className={`${style.right} ${style.editDeliveryTime}`}>Sửa</div>
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
                    <label htmlFor="" className={style.containerRadio}>
                      <span>Thanh toán khi nhận hàng</span>
                      <input type="radio" checked name="type" value="cold" />
                      <span className={style.checkmarkRadio}></span>
                    </label>
                    <label htmlFor="" className={`${style.containerRadio} ${style.momoPayment}`}>
                      <span>Thanh toán qua momo</span>
                      <input type="radio" checked name="type" value="momo" />
                      <span className={style.checkmarkRadio}></span>
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
                      <button className={style.btnAddVoucher}>Thêm khuyến mại</button>
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
                    <button className={style.btnOrder}>ĐẶT HÀNG</button>
                    <button className={style.btnBackToMenu}><Link to="/">TIẾP TỤC MUA HÀNG</Link></button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className={style.editDeliveryTimePopUp}>
        <div className={style.timePopUpTitle}>Thời gian giao hàng</div>
        <div className={style.timePopUpBtn}><IoCloseCircle className={style.popUpIcon}/></div>
        <div className={style.timePopUpContent}>
          <div className={style.timePopUpWrap}>
            <div className={style.wrapSelectTime}>
              <select name="hour" className={style.hour}>
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
              <select name="minute" className={style.minute}>
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
            <div className={style.wrapSelectTimeBtn}>XONG</div>
          </div>
        </div>
      </div>
      <div className={style.overlay}></div>
    </div>
  )
}

export default Checkout