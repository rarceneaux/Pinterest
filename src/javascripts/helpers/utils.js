import $ from 'jquery';

const printToDom = (divId, printThis) => {
  $(`#${divId}`).html(printThis);
};

export default { printToDom };
