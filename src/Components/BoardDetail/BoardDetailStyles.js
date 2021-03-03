import styled from 'styled-components'

export const DetailContent = styled.div`
  position: absolute;
  left: 340px;
  top: 20px;
  z-index: 2;
  max-width: 320px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgb(34 34 34 / 30%);
`

export const DetailSwiper = styled.section`
  overflow: hidden;
  position: relative;
  height: 300px;
  .swiper-container {
    position: static;
  }
  .swiper-slide,
  .img {
    display: block;
    img {
      max-width: 100%;
      vertical-align: top;
    }
  }
  .swiper-pagination {
    display: flex;
    font-size: 0;
    text-align: left;
  }
  .swiper-pagination-fraction,
  .swiper-pagination-custom,
  .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 0;
  }
  .swiper-pagination-bullets {
    .swiper-pagination-bullet {
      width: 100%;
      height: 3px;
      margin: 0;
      flex: 1;
      opacity: 1;
      background-color: #ddd;
      border-radius: 0;
      margin: 0;
      &-active {
        background-color: #4959a9;
      }
    }
  }
`

export const DetailDesc = styled.section`
  position: relative;
  padding: 40px 20px;
  h4 {
    margin-bottom: 16px;
    font-weight: 500;
    font-size: 20px;
  }
  .date {
    position: absolute;
    right: 20px;
    top: 10px;
    letter-spacing: 1px;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 16px;
  }
  .desc {
    padding: 10px;
    border: 1px solid #ddd;
  }
  pre {
    line-height: 1.5;
    font-size: 14px;
  }
`