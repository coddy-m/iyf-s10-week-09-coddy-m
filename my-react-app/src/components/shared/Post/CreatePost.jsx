import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../../../hooks';
import { Input } from "../Input";
import { Button } from "../Button";
import { Card } from "../Card";
export function CreatePostForm() {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.title?.trim()) {
      errors.title = 'Title is required';
    } else if (values.title.length < 5) {
      errors.title = 'Title must be at least 5 characters';
    }
    if (!values.body?.trim()) {
      errors.body = 'Content is required';
    } else if (values.body.length < 20) {
      errors.body = 'Content must be at least 20 characters';
    }
    return errors;
  };

  const { 
    values, 
    errors, 
    touched, 
    handleChange, 
    handleBlur, 
    handleSubmit,
    reset 
  } = useForm({ title: '', body: '' }, validate);

  const onSubmit = async (formData) => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In real app: await fetch('/api/posts', { method: 'POST', body: JSON.stringify(formData) })
    
    setSubmitSuccess(true);
    reset();
    
    // Redirect after success
    setTimeout(() => {
      navigate('/posts');
    }, 1500);
    
    setIsSubmitting(false);
  };

  if (submitSuccess) {
    return (
      <Card className="max-w-2xl mx-auto text-center">
        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Post Created!</h3>
        <p className="text-gray-600">Redirecting to posts...</p>
      </Card>
    );
  }

  return (
    <Card title="Create New Post" className="max-w-2xl mx-auto">
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(onSubmit); }}>
        <Input
          label="Title"
          name="title"
          value={values.title}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.title && errors.title}
          placeholder="Enter a compelling title..."
          required
        />

        <div className="mb-4">
          <label className="label" htmlFor="body">
            Content <span className="text-danger">*</span>
          </label>
          <textarea
            id="body"
            name="body"
            value={values.body}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Share your thoughts..."
            rows={6}
            className={`
              input min-h-[120px] resize-y
              ${touched.body && errors.body ? 'input-error' : ''}
            `}
          />
          {touched.body && errors.body && (
            <p className="error-text" role="alert">{errors.body}</p>
          )}
        </div>

        <div className="flex gap-3 pt-4 border-t border-gray-200">
          <Button type="submit" loading={isSubmitting} disabled={isSubmitting}>
            Publish Post
          </Button>
          <Button 
            type="button" 
            variant="secondary" 
            onClick={() => navigate('/posts')}
            disabled={isSubmitting}
          >
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default CreatePostForm;