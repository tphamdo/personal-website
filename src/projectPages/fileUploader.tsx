import ProjectTemplate from '../components/projectTemplate';
import projects from '../projects';
import MyCodeBlock from '../components/myCodeBlock';

const code = `
model User {
  id       Int      @id @default(autoincrement())
  folders  Folder[]
}

model Folder {
  id             Int      @id @default(autoincrement())
  parentFolderId Int?
  parentFolder   Folder?  @relation("FolderHierachy", fields: [parentFolderId], references: [id], onDelete: Cascade)
  childFolders   Folder[] @relation("FolderHierachy")
  files          File[]
  owner          User     @relation(fields: [ownerId], references: [id], onDelete: Cascade)
  ownerId        Int
}

model File {
  id        Int      @id @default(autoincrement())
  folder    Folder   @relation(fields: [folderId], references: [id], onDelete: Cascade)
  folderId  Int
}
`;

function FileUploaderPage() {
  const project = projects.find((p) => p.name === 'fileuploader');

  if (!project) return <></>;
  return (
    <div className="max-w-3xl mx-auto">
      <ProjectTemplate
        title={project.title}
        codeLink={project.codeLink}
        videoSrc={project.videoSrc}
        className="slide delay01"
      />

      <div className="text-lg mt-8 max-w-xl mx-auto slide delay03">
        <p className="text-xl font-medium">
          File uploader is a Google Drive Clone that allows users to store
          files. Users may upload files, create folders, and download any of those files/folders.
        </p>
        <p className="mt-8 text-neutral-800">
          This was a fun project that taught me how to use prisma, a Node.js and
          Typescript ORM, as well as multer, a Node.js middleware for handling
          multipart/form-data.
        </p>
        <p className="mt-4 text-neutral-800">
          I think the most interesting part about this project was designing the
          database. Folders need to be able to hold files as well as other
          folders. To represent this in our database, we can define a
          self-relation in Prisma (In SQL, this would be the same as creating a
          foreign key that points to its own table). The overall model looks
          like:
        </p>
        <div className="mt-8">
          <MyCodeBlock code={code} language="javascript" />
        </div>
        <p className="mt-6 text-neutral-800">
          This model works for my small hobby project, but It makes me curious
          how Google Drive actually models their databases with much more files.
          Or how X models their posts. I imagine this simple design is not very
          performant with tons of data. Maybe{' '}
          <a href="https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/">
            <i>Designing Data Intensive Applications</i>
          </a>{' '}
          has some insight.
        </p>
      </div>
    </div>
  );
}

export default FileUploaderPage;
