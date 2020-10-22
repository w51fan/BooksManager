/* eslint-disable */
import {
login
} from "@/api/common";


export default {
  namespaced: true,
  state: {
    countryList: [], //国家列表
  },
  getters: {
    countryList: state => state.countryList,
   
  },
  mutations: {
    setCountryList: (state, countryList) => {
      state.countryList = countryList;
    },
  },
  actions: {
    login({
      commit
    }, {
      type
    }) {
      return new Promise((resolve, reject) => {
        login({
            type
          })
          .then(res => {
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    // 获取省 市 地区 都是它
    async login({
      commit
    }, param) {
      let res = await login(param.id);
      if (param.type == "province") {
        commit("getProvinceList", res);
      } else if (param.type == "city") {
        commit("getCityList", res);
      } else if (param.type == "area") {
        commit("getNewAreaList", res);
      }
      return res || {};
    }, // 清除省市区下拉列表
  }
};
