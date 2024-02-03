<template>
  <div class="is-mobile is-full px-5 pt-0 is-hidden-desktop is-multiline">
    <slot></slot>
  </div>
  <div class="is-desktop is-full pl-6 pt-0 is-hidden-touch is-multiline">
    <slot></slot>
  </div>
</template>
