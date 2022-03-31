import React from 'react'
import style from './Popup.module.css'
import { IoCloseCircle } from 'react-icons/io5'
import { FaSearchLocation } from 'react-icons/fa'
const ChooseStorePopup = (props: any) => {
    let { setPopupChooseStore, handleSearchStores, listStore, handleDisplayStoreChoosed, fillStoreChoose, searchAddressStore } = props
    return (
        <div>
            <div className={style.container}>
                <div className={style.popupChooseStore}>
                    <div onClick={() => { setPopupChooseStore(false) }} className={style.popUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
                    <div ref={fillStoreChoose} className={style.popupSearchBox}>
                        <div className={style.iconSearch} ><FaSearchLocation /></div>
                        <input value={searchAddressStore} onChange={(e) => { handleSearchStores(e) }} className={style.ipSearch} placeholder="Tìm cửa hàng..." type="text" />
                    </div>
                    {/* modal an */}
                    <div className={style.listStore}>
                        {listStore && listStore.map((item: any) => {
                            return (
                                <div onClick={() => {
                                    handleDisplayStoreChoosed(item)
                                }} key={item.properties.id} className={style.storeItem}>
                                    <div className={style.left}>
                                        <div className={style.storeName}>{item.properties.name}</div>
                                        <div className={style.storeAddress}>{item.properties.address}</div>
                                    </div>
                                    <div className={style.right}>{item.properties.distance}</div>
                                </div>)
                        })
                        }
                    </div>
                </div>
            </div>
            <div onClick={() => { setPopupChooseStore(false) }} className={style.overlay}></div>
        </div>
    )
}

export default ChooseStorePopup