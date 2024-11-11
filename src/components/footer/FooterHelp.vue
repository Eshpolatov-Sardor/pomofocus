<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
</script>
<template>
  <div class="w-[45%] m-auto mt-10">
    <div>
      <div>
        <h1 class="text-4xl text-mono">
          An online Pomodoro Timer to boost <br />
          your productivity
        </h1>
        <h2 class="text-2xl text-mono mt-4">What is Pomofocus?</h2>
        <div class="w-10 bg-red-700 h-1 rounded-lg mt-2"></div>
        <p class="text-mono mt-4 text-xl opacity-50">
          Pomofocus is a customizable pomodoro timer that works on desktop & mobile browser. The aim
          of this app is to help you focus on any task you are working on, such as study, writing,
          or coding. This app is inspired by Pomodoro Technique which is a time management method
          developed by Francesco Cirillo.
        </p>
      </div>
      <div>
        <h2 class="text-2xl text-mono mt-4">What is Pomodoro Technique?</h2>
        <div class="w-10 bg-red-700 h-1 rounded-lg mt-2"></div>
        <p class="text-mono mt-4 text-xl opacity-50">
          The Pomodoro Technique is created by Francesco Cirillo for a more productive way to work
          and study. The technique uses a timer to break down work into intervals, traditionally 25
          minutes in length, separated by short breaks. Each interval is known as a pomodoro, from
          the Italian word for 'tomato', after the tomato-shaped kitchen timer that Cirillo used as
          a university student. - <b class="text-red-500">Wikipedia</b>
        </p>
      </div>
      <div>
        <h2 class="text-xl text-mono mt-4">How to use the Pomodoro Timer?</h2>
        <div class="w-10 bg-red-700 h-1 rounded-lg mt-2"></div>
        <ul>
          <li class="text-xl opacity-50 mt-4">1. <b> Add tasks </b> to work on today</li>
          <li class="text-xl opacity-50">
            2. <b>Set estimate pomodoros </b> (1 = 25min of work) for each tasks
          </li>
          <li class="text-xl opacity-50">3. <b>Select a tas </b> to work on</li>
          <li class="text-xl opacity-50">
            4. <b>Start timer</b> and focus on the task for 25 minutes
          </li>
          <li class="text-xl opacity-50">
            5. <b>Take a break </b> for 5 minutes when the alarm ring
          </li>
          <li class="text-xl opacity-50">6. <b>Iterate </b> 3-5 until you finish the tasks</li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl text-mono mt-4">Basic Features</h2>
        <div class="w-10 bg-red-700 h-1 rounded-lg mt-2"></div>
        <ul class="list-disc pl-5 mt-4">
          <li class="text-xl opacity-50">
            <b>Estimate Finish Time: </b> Get an estimate of the time required to complete your
            daily tasks.
          </li>
          <li class="text-xl opacity-50">
            <b>Add Templates: </b> Save your repetitive tasks as templates and add them with just
            one click.
          </li>
          <li class="text-xl opacity-50">
            <b>Visual Reports:</b> See how much time you've focused each day, week, and month.
          </li>
          <li class="text-xl opacity-50">
            <b>Custom Settings:</b> Personalize your focus/break time, alarm sounds, background
            sounds, and more.
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl text-mono mt-4">Premium Features</h2>
        <div class="w-10 bg-red-700 h-1 rounded-lg mt-2"></div>
        <ul class="list-disc pl-5 mt-4">
          <li class="text-xl opacity-50">
            <b>Add Projects: </b> Track how much time you spend on each project.
          </li>
          <li class="text-xl opacity-50">
            <b>Yearly Reports: </b> View your focus hours for each year.
          </li>
          <li class="text-xl opacity-50">
            <b>Download Reports: </b> Download your focus history in CSV format
          </li>
          <li class="text-xl opacity-50"><b>No Template Limit: </b> Save more than 3 templates.</li>
          <li class="text-xl opacity-50">
            <b>Todoist Integration: </b> Load tasks from your Todoist account.
          </li>
          <li class="text-xl opacity-50">
            <b>Webhook Integration: </b> Connect to other apps (Zapier, IFTTT, etc)
          </li>
          <li class="text-xl opacity-50">
            <b>No Ads: </b> Enjoy a clean and distraction-free app experience.
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl text-mono mt-4">Download App</h2>
        <div class="w-10 bg-red-700 h-1 rounded-lg mt-2"></div>
        <ul class="list-disc pl-5 mt-4">
          <li class="text-xl opacity-50"><b>Windows and Mac: </b> will be available in 2024</li>
          <li class="text-xl opacity-50"><b>Android and iOS: </b> will be available in 2025</li>
        </ul>
      </div>
      <div>
        <div class="border-t border-black mt-4">
          <div class="flex justify-center gap-4 mt-4 text-mono">
            <a href="#">HOME</a>
            <a href="#">PRIVACY</a>
            <a href="#">TERMS</a>
            <a href="#">CONTACT</a>
            <a href="#">SIMPLE PAGE</a>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <img
            class="w-8 h-8 rounded-full"
            src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_facebook-512.png"
            alt="facebook"
          />
          <img
            class="w-16 h-16 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpgU5RFIDn9RMXc-_zFfjQXo54pmPPrs3fnA&s"
            alt="twitter"
          />
          <img
            class="w-8 h-8 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQopMmUGlZu3MJyfdX2ERfYCqN664oUimy8gA&s"
            alt="pino"
          />
        </div>
        <div class="flex flex-col justify-center items-center pb-6">
          <p>Made with by Yuya Uzu</p>
          <p class="opacity-50">©Pomofocus 2024. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
