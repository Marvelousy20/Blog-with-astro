export default function Navbar() {
  return (
    <div class="flex space-x-10 mb-4 p-6 text-white text-2xl">
      <div>
        <a href="/" class="inline">
          Home
        </a>
      </div>
      <div>
        <a href="/about">About</a>
      </div>
      <div>
        <a href="/blog">Blog</a>
      </div>
    </div>
  );
}
