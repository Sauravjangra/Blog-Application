import Comment from '../model/comment.js';

export const newComment = async (request, response) => {
    try {
        const comment = new Comment(request.body);
        await comment.save();

        response.status(201).json({ message: 'Comment saved successfully', commentId: comment._id });
    } catch (error) {
        response.status(500).json({ error: 'Failed to save comment', details: error.message });
    }
};

export const getComments = async (request, response) => {
    try {
        const comments = await Comment.find({ postId: request.params.id });
        
        response.status(200).json(comments);
    } catch (error) {
        response.status(500).json({ error: 'Failed to fetch comments', details: error.message });
    }
};

export const deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findByIdAndDelete(request.params.id);
        if (!comment) {
            response.status(404).json({ error: 'Comment not found' });
            return;
        }

        response.status(200).json({ message: 'Comment deleted successfully', deletedComment: comment });
    } catch (error) {
        response.status(500).json({ error: 'Failed to delete comment', details: error.message });
    }
};
