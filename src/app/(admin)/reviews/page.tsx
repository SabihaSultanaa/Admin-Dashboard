// src/app/(admin)/reviews/page.tsx

import ReviewsGrid from "@/components/reviews-grid";


export default function ReviewsPage() {
  // const { isLoaded, user } = useUser();
  // const router = useRouter();
  
  // useEffect(() => {
  //   if (isLoaded) {
  //     const role = (user?.publicMetadata as { role?: string })?.role;
  //     if (!user || role !== 'admin') {
  //       router.push('/');
  //     }
  //   }
  // }, [isLoaded, user, router]);

  // if (!isLoaded) {
  //   return <div>Loading...</div>;
  // }

  return <ReviewsGrid />;
}