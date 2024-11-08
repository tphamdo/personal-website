import ProjectTemplate from '../components/projectTemplate';
import projects from '../projects';
import MyCodeBlock from '../components/myCodeBlock';

const code = `
function genPassword(password: string) {
  var salt = crypto.randomBytes(32).toString('hex');
  var genHash = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');

  return {
    salt: salt,
    hash: genHash,
  };
}

function validPassword(password: string, hash: string, salt: string) {
  var hashVerify = crypto
    .pbkdf2Sync(password, salt, 10000, 64, 'sha512')
    .toString('hex');
  return hash === hashVerify;
}
`;

function FileUploaderPage() {
  const project = projects.find((p) => p.name === 'membersonly');
  if (!project) return <></>;

  return (
    <div className="max-w-3xl mx-auto">
      <ProjectTemplate project={project} className="slide delay01" />

      <div className="text-lg mt-8 max-w-xl mx-auto slide delay03">
        <p className="text-xl font-medium">
          Members Only is an exclusive club. To join, you must sign in and enter
          the top secret password. Then, you can see the author of each post and
          make posts of your own!
        </p>
        <p className="mt-8 text-neutral-800">
          Members Only was a fun project that taught me how to authenticate
          users and create different permissions/roles for those users. I also
          learned how to use sessions/cookies to persist user sessions. To
          handle much of this logic, I used{' '}
          <a href="https://www.passportjs.org/" target="_blank">
            passportjs
          </a>
          , a Node.js authenitcation middleware.
        </p>
        <p className="mt-4 text-neutral-800">
          I found the encryption techniques used to store passwords most
          interesting. Instead of storing the raw password in the db, we can
          hash the password along with a salt and store the hash and salt in the
          database. Salting prepends a random string to the password to help
          protect against{' '}
          <a href="https://en.wikipedia.org/wiki/Rainbow_table" target="_blank">
            rainbow tables
          </a>{' '}
          and{' '}
          <a
            href="https://en.wikipedia.org/wiki/Dictionary_attack"
            target="_blank"
          >
            dictionary attacks
          </a>
          . To authenticate users, we can compare the entered password to the
          hash by rehashing the password with the same salt.
        </p>
        <div className="mt-8">
          <MyCodeBlock code={code} language="javascript" />
        </div>
        <p className="mt-6 text-neutral-800">
          In the code, you can see the functions used to generate the hash/salt
          and to validate user passwords.
        </p>
      </div>
    </div>
  );
}

export default FileUploaderPage;
