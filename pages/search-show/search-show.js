const app = getApp();

Page({
  data: {
    inputValue: '',
  },

  onBlur(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },

  search() {
    // implement serach functionality
  },
});
