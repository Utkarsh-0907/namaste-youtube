import React from "react";

const commentData = [
  {
    name: "utkarsh",
    text: "This is my name",
    replies: [
      {
        name: "utkarsh",
        text: "This is my name",
        replies: [
          {
            name: "utkarsh",
            text: "This is my name",
            replies: [
              {
                name: "utkarsh",
                text: "This is my name",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "utkarsh",
    text: "This is my name",
    replies: [],
  },
  {
    name: "utkarsh",
    text: "This is my name",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
      <img
        className="w-12 h-12"
        alt="User"
        src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      {comment.replies && comment.replies.length > 0 && (
        <div className="pl-5 border border-l-black ml-5">
          <CommentList comments={comment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentData} />
    </div>
  );
};

export default CommentsContainer;
