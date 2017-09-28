const defaults = {
  post: {
      username: 'Jourdan',
      images: {
          profile: './images/user/default.png',
          post: './images/posts/default.png'
        },
      icons: {
          heart: {
            light: 'fal fa-heart',
            solid: 'fas fa-heart',
            color: '#FF4475'
          },
          reply: {
            light:'fal fa-comment',
            solid: 'fas fa-comment',
            color: 'deepskyblue'
          },
          send: {
            light:'fal fa-share',
            solid: 'fas fa-share',
            color: 'lightsalmon'
          }
        }
    },
  comments: {
      username: 'Jourdan',
      comment: '',
      options: ['Go to post', 'Report inappropriate', 'Embed', 'Cancel'],
      icons: {
          menu: 'fas fa-ellipsis-h'
        }
    }
};

export default defaults;
