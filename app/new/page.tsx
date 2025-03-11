export default function NewPostPage() {
  return (
    <main className="p-4">
      <form className="grid gap-2">
        <h2 className="text-2xl">Add New Post</h2>
        <input
          className="bg-slate-700 rounded px-2 py-1"
          name="title"
          type="text"
          placeholder="Add a title..."
        />
        <textarea
          className="bg-slate-700 rounded px-2 py-1"
          name="content"
          placeholder="Add your content..."
          rows={8}
        />
        <input
          className="bg-slate-700 rounded px-2 py-1"
          name="author"
          type="text"
          placeholder="Add an author..."
        />
        <button className="hover:bg-slate-600 px-2 py-1 rounded cursor-pointer">
          Save
        </button>
      </form>
    </main>
  );
}
