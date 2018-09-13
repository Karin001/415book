export const baseApiUrl = 'http://localhost';
export const environment_production = false;
export const restApiUrl = {
  booklist: '/booklist',
  bookDetail: '/bookDetail',
  bookType:'/bookType',
  logIn: '/logIn',
  signUp: '/signUp',
  phoneCode: '/phoneCode',
  checkPhoneCode: '/checkPhoneCode',
  resetPW: '/resetPW'
}
export const storageNames = {
  index: 'index_book_list',
  history: 'book_type_history_list',
  sports: 'book_type_sports_list',
  child: 'book_type_child_list',
  foreign: 'book_type_foreign_list',
  art: 'book_type_art_list',
  literature: 'book_type_literature_list',
  society: 'book_type_society_list',
  hot: 'hot_book_list',
  science_technology:'book_type_science_technology_list',
  new: 'new_book_list',
  life: 'book_type_life_list',
  areaData: 'area_data',
  token: 'auth_token',
  recommend:'book_recommend_list'
}
export const typeNames = {
  hot: {linkName:'hot',name:'热门'},
  new: {linkName:'new',name:'新书'},
  literature: {linkName:'literature',name:'文学'},
  art:{linkName:'art',name:'艺术'},
  history: {linkName:'history',name:'历史'},
  foreign: {linkName:'foreign',name:'外文'},
  science_technology: {linkName:'science_technology',name:'科学与技术'},
  child: {linkName:'child',name:'儿童'},
  society: {linkName:'society',name:'社会'},
  sports: {linkName:'sports',name:'运动'},
  life: {linkName:'life',name:'生活'},
  recommend: {linkName:'recommend',name:'推荐'}
}
export const typeNames_short = {
  hot: '热门',
  new: '新书',
  literature: '文学',
  art:'艺术',
  history: '历史',
  foreign: '外文',
  science_technology: '科学与技术',
  child: '儿童',
  society: '社会',
  sports: '运动',
  life:'生活',
  recommend:'推荐'
}