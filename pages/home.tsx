import FavoriteCategory from "@/src/components/homeAuth/favoriteCategory"
import FeaturedSection from "@/src/components/homeAuth/featuresSection"
import NewestCategory from "@/src/components/homeAuth/newestCategory"
import Head from "next/head"

const HomeAuth = function () {
    return (
        <>
            <Head>
                <title>Onebitflix - home</title>
                <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
            </Head>
            <main>
                <FeaturedSection/>
                <NewestCategory/>
                <FavoriteCategory/>
            </main>
        </>
    )
}

export default HomeAuth