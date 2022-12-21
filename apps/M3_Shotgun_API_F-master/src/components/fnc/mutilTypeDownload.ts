import {GET} from '@hooks/api/useAPI';
import FileSaver from 'file-saver';

interface multiTypeDownloadProps {
  prfId: string;
  prfName: string;
  fileType: string;
}

export const multiTypeDownload = (prfId, prfName, fileType): multiTypeDownloadProps => {
  switch (fileType) {
    case 'REPORT':
      return GET(`/shotgun/action/file/download/category/pdf?category=REPORT&profileId=${prfId}`)
        .then((res) => {
          console.log('Download Value ==> ', res.data.data);
          const resData = res.data.data;
          const resultData = `data:application/pdf;base64,${resData}`;

          FileSaver.saveAs(resultData, `Report_${prfName}.pdf`);
        })
        .catch(function (error) {
          if (error.response) {
            // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
            // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
            // node.js에서는 http.ClientRequest 인스턴스입니다.
            console.log(error.request);
          } else {
            // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
            console.log('Error', error.message);
          }
          console.log(error.config);
        });

    default:
      return GET(`/shotgun/action/file/download/category?category=${fileType}&profileId=${prfId}`)
        .then((res) => {
          console.log(`${fileType} Download Value ==> `, fileType === 'REPORT' ? res.data.data : res.data);
          const resData = res.data;

          const resultData =
            fileType === 'STANDARD'
              ? `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(resData))}`
              : 'data:text/html;charset=utf-8,' + encodeURIComponent(resData);

          const downloadFileName =
            fileType === 'STANDARD'
              ? `${prfName}_Standard.json`
              : fileType === 'KRONA'
              ? `Krona_${prfName}.html`
              : `Ez-viz_${prfName}.html`;

          FileSaver.saveAs(resultData, downloadFileName);
        })
        .catch(function (error) {
          if (error.response) {
            // 요청이 전송되었고, 서버는 2xx 외의 상태 코드로 응답했습니다.
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // 요청이 전송되었지만, 응답이 수신되지 않았습니다.
            // 'error.request'는 브라우저에서 XMLHtpRequest 인스턴스이고,
            // node.js에서는 http.ClientRequest 인스턴스입니다.
            console.log(error.request);
          } else {
            // 오류가 발생한 요청을 설정하는 동안 문제가 발생했습니다.
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
  }
};
