import { PostsState } from './types';

const intialState = {
    posts: [{
        type: 'POST',
        title: 'Super post',
        id: "1",
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        creator: 1,
        comments: [
            {
                id: '1',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                creator: 2,
                postId: '1',
            },
            {
                id: '2',
                content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                creator: 3,
                postId: '1',
            },
        ]
    }],
    currentPost: null,
    pending: false,
}

export default intialState;