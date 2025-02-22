import Link from "next/link";
import { usePostsGrid } from "api/useApi";
import Image from "next/image";

export default function Grid() {
  const { posts, isLoading, isError } = usePostsGrid(); // Use the custom hook
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading posts.</div>;
  }
  return (
    <>
      <section
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:m-8 md:m-4"
      >
        {posts.map((post) => (
          <div key={post.id} className="max-w-lg mx-auto">
            <div className="max-w-sm bg-white rounded-lg shadow-md mb-5 dark:bg-gray-800 dark:border-gray-700">
              {/* Check if the featured media is available */}
              {post._embedded &&
              post._embedded["wp:featuredmedia"] &&
              post._embedded["wp:featuredmedia"][0].source_url ? (
                <Image
                  width={500}
                  height={500}
                  src={post._embedded["wp:featuredmedia"][0].source_url}
                  alt={post.title.rendered}
                  className="rounded-t"
                />
              ) : (
                <Image
                  width={500}
                  height={500}
                  src="/raiatecThumb.svg"
                  alt={post.title.rendered}
                  style={{ width: "100%" }}
                  className="rounded-t"
                />
              )}
              <div className="p-5">
                <h3 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link href={`/${post.slug}`}>{post.title.rendered}</Link>
                </h3>

                {/*<h2 className="font-normal text-gray-700 mb-3 line-clamp-4 break-all">{post.excerpt.rendered}</h2>*/}
                {post.excerpt && (
                  <p
                    className="mb-3 font-normal text-gray-700 line-clamp-4 break-all dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                )}
                <br />
                <br />
                <div className="relative">
                  {post.slug && (
                    <Link
                      className="font-bold text-green-400 focus:ring-4 absolute bottom-0 left-0 px-3 py-2"
                      href={`/${post.slug}`}
                    >
                      {"ادامه مطلب..."}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
