<template>
  <div class="min-h-screen bg-[#4B2E2E] text-white flex justify-center items-center">
    <div
      class="bg-[#A67B5B] p-6 rounded-2xl shadow-2xl w-full max-w-md animate-fadeIn"
    >
      <h2 class="text-3xl font-bold text-center mb-6">Sign Up</h2>

      <input v-model="email" type="email" placeholder="Email" class="input mb-4" />
      <input v-model="password" type="password" placeholder="Password" class="input mb-4" />
      <input v-model="name" type="text" placeholder="Name" class="input mb-4" />

      <!-- Gender Dropdown -->
      <select v-model="gender" class="input mb-4">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <!-- Submit Button -->
      <button
        @click="signUp"
        :disabled="loading"
        class="bg-[#5D3A00] w-full p-2 rounded-md hover:bg-[#704400] transition duration-300"
      >
        {{ loading ? 'Signing Up...' : 'Sign Up' }}
      </button>

      <p v-if="errorMessage" class="text-red-200 text-center mt-4">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from './lib/supabase'; // Adjust this path if needed
import { useUserStore } from '../stores/userStore';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const name = ref('');
const gender = ref('');
const errorMessage = ref('');
const loading = ref(false);

const userStore = useUserStore();
const router = useRouter();

const signUp = async () => {
  errorMessage.value = '';
  loading.value = true;

  const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
  });

  if (signUpError || !signUpData?.user) {
    errorMessage.value = signUpError?.message || 'Signup failed';
    loading.value = false;
    return;
  }

  const userId = signUpData.user.id;

  userStore.login(
    {
      id: userId,
      email: email.value,
      name: name.value,
      gender: gender.value,
    },
    signUpData.session?.access_token || ''
  );

  loading.value = false;
  router.push('/ProfilePage');
};
</script>

<style scoped>
.input {
  @apply w-full px-4 py-2 rounded bg-white text-black placeholder-gray-600 focus:outline-none;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
