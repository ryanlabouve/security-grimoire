import Content from "~/components/content";

export default function Index() {
  return (
    <Content>
      <div className="text-2xl mb-3 bg-cyan-400 py-1 text-center font-bold">
        SECURITY GRIMOIRE
      </div>
      <p className="pb-3">Welcome to my security grimoire.</p>
      <p className="pb-3">
        A collection of things I've learned / resources / approaches.
      </p>
      <p>
        Feel free to&nbsp;
        <a href="https://github.com/ryalabouve/security-grimoire">contribute</a>
      </p>
    </Content>
  );
}
