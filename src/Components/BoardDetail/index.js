import React from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DetailDesc, DetailContent, DetailSwiper } from './BoardDetailStyles';
import 'swiper/swiper.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination, Autoplay]);

const BoardDetail = ({ detailItem }) => {
  return (
    <DetailContent>
      <DetailSwiper>
        {
          detailItem.uploadImgPath.length < 2 ?
          <span className="img">
            {
              detailItem.uploadImgPath.map((imgPath, index) => <SwiperSlide key={index}><img src={imgPath} alt={detailItem.title} /></SwiperSlide>)
            }
          </span>
          :
          <Swiper
            autoplay={{ delay: 3000 }}
            spaceBetween={20}
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
        <h4>{detailItem.title}</h4>
        <i className="date">{detailItem.date}</i>
        <div className="desc">
          <pre>{detailItem.desc}</pre>
        </div>
      </DetailDesc>
    </DetailContent>
  );
};

export default BoardDetail;