import { Dispatch, SetStateAction, useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IPropsType {
  address: string;
}

export default function KakaoMapPageSearch({ address }: IPropsType) {
  console.log("KakaoMapPageSearch address", address);

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=d470c2e0089bd23fc73b8889771d5faa&libraries=services,clusterer,drawing";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        var mapContainer = document.getElementById("map"), // 지도를 표시할 div
          mapOption = {
            center: new window.kakao.maps.LatLng(37.496486063, 127.028361548), // 지도의 중심좌표
            level: 3, // 지도의 확대 레벨
          };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        var map = new window.kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        var geocoder = new window.kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다

        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === window.kakao.maps.services.Status.OK) {
            var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new window.kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 인포윈도우로 장소에 대한 설명을 표시합니다
            // var infowindow = new window.kakao.maps.InfoWindow({
            //   content: `<div style="width:150; text-align:center; padding: 5px 10px;">거래 장소</div>`,
            // });
            // infowindow.open(map, marker);

            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
          }
        });
      });
    };
  }, [address]);

  return (
    <>
      <div
        id="map"
        style={{ width: "100%", height: "400px", marginTop: "10px" }}
      ></div>
    </>
  );
}
