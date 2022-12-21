export const fileDownloadFnc = (downloadData, fileName) => {
  const url = window.URL.createObjectURL(new Blob([downloadData]));
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', fileName); //or any other extension
  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
};
