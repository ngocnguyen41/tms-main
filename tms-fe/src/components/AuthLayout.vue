<template>
    <section class="bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-2">
            <div
                class="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24"
            >
            <router-view></router-view>
            </div>

            <div
                class="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8"
            >
                <div>
                    <img
                        class="w-full mx-auto"
                        src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
                        alt=""
                    />

                    <div class="w-full max-w-md mx-auto xl:max-w-xl">
                        <h3 class="text-2xl font-bold text-center text-black">
                            Design your own card
                        </h3>
                        <p
                            class="leading-relaxed text-center text-gray-500 mt-2.5"
                        >
                            Amet minim mollit non deserunt ullamco est sit
                            aliqua dolor do amet sint. Velit officia consequat
                            duis.
                        </p>

                        <div
                            class="flex items-center justify-center mt-10 space-x-3"
                        >
                            <div
                                class="bg-orange-500 rounded-full w-20 h-1.5"
                            ></div>

                            <div
                                class="bg-gray-200 rounded-full w-12 h-1.5"
                            ></div>

                            <div
                                class="bg-gray-200 rounded-full w-12 h-1.5"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Login",
};
</script>

<style scoped></style>
