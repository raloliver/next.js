interface PageProps {
  children: any;
}

export default function Page(props: PageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient from-zinc-900 to-black text-5xl">
      {props.children}
    </div>
  );
}
