import ProjectTemplate from '../components/projectTemplate';
import projects from '../projects';

function ShoppingCartPage() {
  const project = projects.find((p) => p.name === 'shoppingcart');
  if (!project) return <></>;

  return (
    <div className="max-w-3xl mx-auto">
      <ProjectTemplate project={project} className="slide delay01" />

      <div className="text-lg mt-8 max-w-xl mx-auto slide delay03">
        <p className="text-xl font-medium">
          Pure Threads is an online store. You can browse items and add them to
          your cart. The best part, it won't take any of your money!
        </p>
        <p className="mt-8 text-neutral-800">
          Pure Threads was one of the first React Projects I did. I learned how
          to use built in react hooks like useState, useEffect, and useContext.
          Overall, the experience in React is great, updating the DOM is so
          easy!
        </p>
      </div>
    </div>
  );
}

export default ShoppingCartPage;
