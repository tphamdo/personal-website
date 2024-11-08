import ProjectTemplate from '../components/projectTemplate';
import projects from '../projects';
import MyCodeBlock from '../components/myCodeBlock';

const code1 =
  'api.post(`http://localhost:3000/blogs/${blogId}/comments`, values)';
const code2 = `
export async function commentPost(req: Request, res: Response): Promise<void> {
  const { content } = req.body;
  const { blogId } = req.params;
  const authorId = req.user?.id;
  if (!blogId || !authorId || !content) {
    res.status(400).json({ message: 'All fields are required.' });
    return;
  }

  const comment = await db.addComment({ blogId, content, authorId });
  if (comment) res.json({ message: 'Comment successfully added!' });
  else res.json({ message: 'Comment was not added!' });
}`;

function BlogApiPage() {
  const project = projects.find((p) => p.name === 'blogapi');

  if (!project) return <></>;
  return (
    <div className="max-w-3xl mx-auto">
      <ProjectTemplate project={project} className="slide delay01" />
      <div className="text-lg mt-8 max-w-xl mx-auto slide delay03">
        <p className="text-xl font-medium">
          Blog Api is a simple blog site that allows users to write blogs and
          comment on other posts.
        </p>
        <p className="mt-8 text-neutral-800">
          This project uses a RESTful API with separate frontend and backend
          apps. After the user signs in, the server sends a Json Web Token (JWT)
          to the client. The client stores the JWT in local storage and adds the
          JWT to the header in all subsequent requests. This lets the server
          authenticate the request.
        </p>
        <p className="mt-4 text-neutral-800">
          Doing this project showed me that front end applications can be
          separated from the backend (as opposed to generating all pages from
          the server). This offers lots of flexibility and decoupling of front
          end apps and back end services.
        </p>
        <p className="mt-4 text-neutral-800">
          For example, from the front end, we can make a post request
        </p>
        <div className="mt-8">
          <MyCodeBlock code={code1} language="javascript" />
        </div>
        <p className="mt-6 text-neutral-800">
          And in the backend, we can process the post request
        </p>
        <div className="mt-8">
          <MyCodeBlock code={code2} language="javascript" />
        </div>
        <p className="mt-6 text-neutral-800">
          Now the front end application can use multiple backend services or the
          backend can service multiple front end apps!
        </p>
      </div>
    </div>
  );
}

export default BlogApiPage;
