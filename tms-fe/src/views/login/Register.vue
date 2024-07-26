<template>
    <section class="bg-white">
        <div class="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Register 
            </h2>

            <form action="#" method="POST" class="mt-8">
                <div class="space-y-5">
                    <div>
                        <label
                            for=""
                            class="text-base font-medium text-gray-900"
                        >
                            Full name
                        </label>
                        <div class="mt-2.5">
                            <input
                                type="text"
                                name="name"
                                id="fullname"
                                autocomplete="email"
                                required=""
                                placeholder="Enter your name"
                                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                            />
                        </div>
                    </div>

                    <div>
                        <label
                            for=""
                            class="text-base font-medium text-gray-900"
                        >
                            Email address
                        </label>
                        <div class="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autocomplete="email"
                                required=""
                                placeholder="Enter your email"
                                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                            />
                        </div>
                    </div>

                    <div>
                        <div class="flex items-center justify-between">
                            <label
                                for=""
                                class="text-base font-medium text-gray-900"
                            >
                                Password
                            </label>

                        </div>
                        <div class="mt-2.5">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                autocomplete="current-password"
                                required=""
                                placeholder="Enter your password"
                                class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            class="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                            Sign up
                        </button>
                    </div>
                </div>
            </form>

            <p class="mt-2 text-base text-gray-600">
                Do have an account?
                <router-link :to="{name: 'Login'}"
                    class="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                    >Login to your account</router-link
                >
            </p>
        </div>

    </section>
</template>

<script>
export default {
    name: "Login",
};
</script>

<style scoped></style>
