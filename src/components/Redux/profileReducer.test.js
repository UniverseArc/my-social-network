
import profileReducer, { addPostOnWallActionCreate, deletePost } from "./profileReducer"

let state = {
    postsData: [
        { text: 'Hi, how are you?', valueOfLikes: 2 },
        { text: 'It"s my second post', valueOfLikes: 5 },
        { text: 'It"s my first post', valueOfLikes: 20 },
    ],
}

test("Test of creating post", () => {
    // 1. Выполняем нужное нам действие (хотим добавить пост на стену - вызываем AC)
    let newPostBody = {text: "3", valueOfLikes: 0}
    let action = addPostOnWallActionCreate(newPostBody);
    
    // 2. Добавляем пост через Reducer в state

    let newState = profileReducer(state, action)

    // 3. Проверяем, что пост добавился. 

    expect(newState.postsData.length).toBe(4)
})

test("Is message correct", () => {
    // 1. Выполняем нужное нам действие (хотим добавить пост на стену - вызываем AC)
    let action = addPostOnWallActionCreate("itkamasTDD");
    
    // 2. Добавляем пост через Reducer в state

    let newState = profileReducer(state, action)

    // 3. Проверяем, что пост добавился. 

    expect(newState.postsData[3].text).toBe("itkamasTDD")
})

test("State after deleting should decrement", () => {
    // 1. Выполняем нужное нам действие (хотим добавить пост на стену - вызываем AC)
    let action = deletePost(1);
    
    // 2. Удаляем пост через Reducer в state

    let newState = profileReducer(state, action)

    // 3. Проверяем, что пост добавился. 

    expect(newState.postsData.length).toBe(3)
})
