<template>
  <q-page class="q-pa-md">
   <q-list bordered separator>
      <q-item
        v-for="task in tasks"
        :key="task.id"
        clickable
        @click="task.completed=!task.completed"
        v-bind:class="task.completed ? 'bg-green-1' : 'bg-orange-1'"
        v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label
            :class="{'text-strikethrough' : task.completed}"
          >{{task.name}}</q-item-label>
         </q-item-section>
        <q-item-section side>
          <div class="row">
          <div class="column justify-center">
          <q-icon name="event" size="18px" class="q-mr-xs"/>
            </div>
          <div class="column">
          <q-item-label class="row justify-end" caption>{{task.duoDate}}</q-item-label>
          <q-item-label class="row justify-end" caption>{{task.duoTime}}</q-item-label>
            </div>
          </div>
        </q-item-section>
      </q-item>
   </q-list>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      tasks: [
        {
          id: 1,
          name: 'Go to shop',
          completed: false,
          duoDate: '2019/05/12',
          duoTime: '18:30'
        },
        {
          id: 2,
          name: 'Get bananas',
          completed: false,
          duoDate: '2019/05/12',
          duoTime: '18:30'
        },
        {
          id: 3,
          name: 'Get apples',
          completed: false,
          duoDate: '2019/05/12',
          duoTime: '18:30'
        }
      ]
    }
  }

}
</script>

<style>

</style>
