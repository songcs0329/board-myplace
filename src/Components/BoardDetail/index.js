import React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DetailDesc, DetailContent, DetailSwiper } from './style';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { deleteMapItemDB } from 'Utils/utils';

SwiperCore.use([Pagination, Autoplay]);

const BoardDetail = ({ userId, detailItem, handleDetailItem }) => {
  const closeDetailItem = () => handleDetailItem(null)
  const handleDeleteItem = async () => {
    const ok = window.confirm("해당 글을 삭제하시겠습니까?")
    if(ok) {
      deleteMapItemDB(detailItem)
      handleDetailItem(null)
    }
  }
  return (
    <DetailContent>
      <button type="button" className="close" onClick={closeDetailItem}><i className="hide">close</i></button>
      <DetailSwiper>
        {
          detailItem.uploadImgPath.length < 2 ?
          <span className="img">
            {
              detailItem.uploadImgPath.map((imgPath, index) => <img key={index} src={imgPath} alt={detailItem.title} />)
            }
          </span>
          :
          <Swiper
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {
              detailItem.uploadImgPath.map((imgPath, index) => <SwiperSlide key={index}><img src={imgPath} alt={detailItem.title} /></SwiperSlide>)
            }
          </Swiper>
        }
      </DetailSwiper>
      <DetailDesc>
        {
          userId === detailItem.creatorId &&
          <ul className="icon_list">
            <li><Link  to={`/update/${detailItem.id}`}><FontAwesomeIcon icon={faEdit}/></Link></li>
            <li><button type="button" onClick={handleDeleteItem}><FontAwesomeIcon icon={faTrashAlt}/></button></li>
          </ul>
        }
        <i className="date">{detailItem.date}</i>
        <h4>{detailItem.title}</h4>
        <div className="map">
          <dl>
            <dt>장소</dt>
            <dd>{detailItem.place}</dd>
          </dl>
          <dl>
            <dt>주소</dt>
            <dd>{detailItem.address}</dd>
          </dl>
        </div>
        <div className="desc">
          <pre>{detailItem.desc}</pre>
        </div>
      </DetailDesc>
    </DetailContent>
  );
};

export default BoardDetail;