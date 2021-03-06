import styled from 'styled-components'

export const DetailContent = styled.div`
  position: absolute;
  left: 340px;
  top: 50%;
  z-index: 2;
  max-width: 320px;
  background-color: #fff;
  box-shadow: 0 10px 15px rgb(34 34 34 / 50%);
  transform: translateY(-50%);
  .close {
    width: 28px;
    height: 28px;
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 10;
    background-color: #222;
    border-radius: 50%;
    &:before,
    &:after {
      content: '';
      display: block;
      width: 2px;
      height: 14px;
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -7px 0 0 -1px;
      background-color: #fff;
    }
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }
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
  .swiper-container-horizontal > {
    .swiper-pagination-bullets {
      .swiper-pagination-bullet {
        margin: 0;
      }
    }
  }
  .swiper-pagination-bullets {
    .swiper-pagination-bullet {
      width: 100%;
      height: 3px;
      flex: 1;
      opacity: 1;
      background-color: #ddd;
      border-radius: 0;
      &-active {
        background-color: #1D4CD8;
      }
    }
  }
`

export const DetailDesc = styled.section`
  position: relative;
  padding: 20px;
  * {
    color: #222;
  }
  h4 {
    margin-top: 8px;
    font-weight: 500;
    font-size: 20px;
  }
  .icon_list {
    font-size: 0;
    text-align: right;
    > li {
      display: inline-block;
      vertical-align: middle;
      & + li {
        margin-left: 10px;
      }
    }
    a,
    button {
      display: block;
      font-size: 18px;
    }
  }
  .date {
    display: block;
    letter-spacing: 0;
    font-family: "Roboto";
    font-weight: 500;
    font-size: 16px;
  }
  > div {
    width: 100%;
    margin-top: 12px;
    padding: 10px;
    border: 1px solid #ddd;
  }
  .map {
    dl {
      margin: 4px 0;
      padding: 6px 4px;
      font-size: 0;
      background-color: #eee;
    }
    dt,
    dd {
      display: inline-block;
      vertical-align: middle;
      font-size: 14px;
    }
    dt {
      padding-right: 10px;
      margin-right: 10px;
      font-weight: 500;
      border-right: 1px solid #222;
    }
  }
  .desc {
    overflow-x: hidden;
    overflow-y: scroll;
    max-height: 200px;
  }
  pre {
    line-height: 1.5;
    font-size: 14px;
  }
`