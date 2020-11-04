const initialState = {
    categories : [
        {id : 1,name : '#디자인'},
        {id : 2,name : '#IT/프로그래밍'},
        {id : 3,name : '#영상/사진/음향'},
        {id : 4,name : '#취업'},
        {id : 5,name : '#마케팅'},
        {id : 6,name : '#스포츠/레저'},
        {id : 7,name : '#번역/통역'},
        {id : 8,name : '#운세/상담'},
        {id : 9,name : '#디자인'},
        {id : 10,name : '#디자인'}
    ]
}

export default function talentCategoriesReducer(state = initialState,action) {
    return {
        ...state,
    }
}