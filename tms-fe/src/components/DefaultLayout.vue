<template>
    <div class="min-h-full flex">
        <!-- Sidebar -->
        <div class="bg-gray-800 w-64 min-h-screen flex-shrink-0">
            <div class="flex items-center justify-center h-16 bg-gray-900">
                <img
                    class="h-8 w-auto"
                    src="../assets/logo.png"
                    alt="smarlog"
                />
            </div>
            <nav class="mt-5 px-2 space-y-1">
                <!-- Tổng quát Section -->
                <div>
                    <h3
                        class="text-gray-400 text-xs font-semibold uppercase tracking-wider px-2 mb-2"
                    >
                        Tổng quát
                    </h3>
                    <router-link
                        v-for="item in generalSection"
                        :key="item.name"
                        :to="item.to"
                        active-class="bg-gray-700 text-white"
                        :class="[
                            this.$route.name === item.to.name
                                ? ''
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                        ]"
                    >
                        <span class="truncate">{{ item.name }}</span>
                    </router-link>
                </div>

                <!-- Vận hành Section -->
                <div>
                    <h3
                        class="text-gray-400 text-xs font-semibold uppercase tracking-wider px-2 mb-2 mt-6"
                    >
                        Vận hành
                    </h3>
                    <router-link
                        v-for="item in operationalSection"
                        :key="item.name"
                        :to="item.to"
                        active-class="bg-gray-700 text-white"
                        :class="[
                            this.$route.name === item.to.name
                                ? ''
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                        ]"
                    >
                        <span class="truncate">{{ item.name }}</span>
                    </router-link>
                </div>

                <!-- Thanh toán Section -->
                <div>
                    <h3
                        class="text-gray-400 text-xs font-semibold uppercase tracking-wider px-2 mb-2 mt-6"
                    >
                        Thanh toán
                    </h3>
                    <router-link
                        v-for="item in paymentSection"
                        :key="item.name"
                        :to="item.to"
                        active-class="bg-gray-700 text-white"
                        :class="[
                            this.$route.name === item.to.name
                                ? ''
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                        ]"
                    >
                        <span class="truncate">{{ item.name }}</span>
                    </router-link>
                </div>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <header class="bg-white shadow-sm">
                <div
                    class="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
                >
                    <div class="flex items-center">
                        <div class="relative text-gray-600">
                        </div>
                    </div>

                    <div class="flex items-center">
                        <!-- Notifications -->
                        <button
                            class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                        >
                            <span class="sr-only">View notifications</span>
                            <BellIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                        <span
                            class="ml-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                            >6</span
                        >

                        <!-- User Profile -->
                        <Menu as="div" class="ml-3 relative">
                            <div>
                                <MenuButton
                                    class="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <span class="sr-only">Open user menu</span>
                                    <img
                                        class="h-8 w-8 rounded-full"
                                        src="https://via.placeholder.com/150"
                                        alt=""
                                    />
                                </MenuButton>
                            </div>
                            <transition
                                enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95"
                            >
                                <MenuItems
                                    class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                >
                                    <MenuItem>
                                        <button
                                            @click="logout"
                                            class="block px-4 py-2 text-sm text-gray-700"
                                        >
                                            Sign out
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </transition>
                        </Menu>
                    </div>
                </div>
            </header>

            <main class="flex-1 overflow-y-auto focus:outline-none">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from "@headlessui/vue";
import { BellIcon, ChevronDownIcon } from "@heroicons/vue/24/outline";
import { useStore } from "vuex";
import { computed } from "vue";
import { useRouter } from "vue-router";

export default {
    components: {
        Disclosure,
        DisclosureButton,
        DisclosurePanel,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        ChevronDownIcon,
        BellIcon,
    },

    setup() {
        const store = useStore();
        const router = useRouter();

        // Define the navigation items for each section
        const generalSection = [
            { name: "Dashboard", to: { name: "Dashboard" } },
            { name: "Bản đồ doanh nghiệp vận tải", to: { name: "Map" } },
        ];

        const operationalSection = [
            { name: "Đơn hàng", to: { name: "Orders" } },
            { name: "Khách hàng", to: { name: "Customers" } },
            { name: "Điều phối", to: { name: "Coordination" } },
            { name: "Giám sát", to: { name: "Supervision" } },
            { name: "Chứng từ", to: { name: "Documents" } },
            { name: "Quản lý KPI", to: { name: "KPIManagement" } },
            { name: "Xem dữ liệu vận hành", to: { name: "OperationalData" } },
        ];

        const paymentSection = [
            { name: "Chi phí vận chuyển", to: { name: "TransportCosts" } },
        ];

        // Logout function to handle logout action
        function logout() {
            store.commit("logout");
            router.push({
                name: "Login",
            });
        }

        return {
            user: computed(() => store.state.user.data),
            generalSection,
            operationalSection,
            paymentSection,
            logout,
        };
    },
};
</script>

<style>
/* Custom styles for the sidebar and the layout */
body,
html {
    margin: 0;
    height: 100%;
}

.min-h-full {
    height: 100vh;
}

.min-h-screen {
    height: calc(100vh - 0rem);
}

.flex-shrink-0 {
    flex-shrink: 0;
}

.bg-gray-800 {
    background-color: #2d3748;
}

.bg-gray-900 {
    background-color: #1a202c;
}

.bg-gray-700 {
    background-color: #4a5568;
}

.group {
    display: flex;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
}

.group:hover {
    background-color: #4a5568;
}

.group:active {
    background-color: #2d3748;
}

.truncate {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.transition {
    transition: all 0.15s ease-in-out;
}

.px-2 {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
}

.py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

.mt-5 {
    margin-top: 1.25rem;
}

.mb-2 {
    margin-bottom: 0.5rem;
}

.mt-6 {
    margin-top: 1.5rem;
}

.text-xs {
    font-size: 0.75rem;
}

.font-semibold {
    font-weight: 600;
}

.uppercase {
    text-transform: uppercase;
}

.tracking-wider {
    letter-spacing: 0.05em;
}

.space-y-1 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.25rem;
}

.flex {
    display: flex;
}

.items-center {
    align-items: center;
}

.justify-center {
    justify-content: center;
}

.h-16 {
    height: 4rem;
}

.text-gray-400 {
    color: #cbd5e0;
}

.text-gray-300 {
    color: #e2e8f0;
}

.hover\:bg-gray-700:hover {
    background-color: #4a5568;
}

.hover\:text-white:hover {
    color: #ffffff;
}

.text-sm {
    font-size: 0.875rem;
}

.font-medium {
    font-weight: 500;
}

.rounded-md {
    border-radius: 0.375rem;
}

.group:hover .text-white {
    color: #ffffff;
}

.focus\:outline-none:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
}

.group:hover .bg-gray-700 {
    background-color: #4a5568;
}

.bg-white {
    background-color: #ffffff;
}

.shadow-sm {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

.h-10 {
    height: 2.5rem;
}

.px-5 {
    padding-left: 1.25rem;
    padding-right: 1.25rem;
}

.pr-10 {
    padding-right: 2.5rem;
}

.rounded-full {
    border-radius: 9999px;
}

.w-auto {
    width: auto;
}

.overflow-y-auto {
    overflow-y: auto;
}

.focus\:ring-2:focus {
    ring: 2px solid transparent;
    ring-offset: 2px;
}

.focus\:ring-offset-2:focus {
    ring-offset: 2px;
}

.focus\:ring-offset-gray-800:focus {
    ring-offset-color: #2d3748;
}

.fill-current {
    fill: currentColor;
}
</style>
