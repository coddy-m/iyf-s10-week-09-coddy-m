import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../hooks';
import { Input, Button, Card } from '../components/shared';
import CreatePostForm from "../components/shared/Post/CreatePost";

<CreatePostForm />


export function CreatePost() {
  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Create New Post</h1>
        <p className="text-gray-600">Share your story with the community.</p>
      </div>
      <CreatePostForm />
    </div>
  );
}

export default CreatePost;