<template>
  <section id="modals" class="mf-modals wrapper">
    <!-- Menus -->
    <div class="inner-wrapper">
      <h2>Modals</h2>

      <!-- <button class="btn btn-primary" @click="toggleModal">
        <span>OPEN MODAL</span>
      </button> -->

      <button class="btn btn-primary" @click="toggleModal">
        Open Modal
      </button>

      <div class="modal" v-if="showModal">
        <div class="modal-background"></div>
        <div class="card">
          <div class="card-header">
            <h2>I'm Too Sexy for My Vue</h2>
            <!-- @click="toggleModal" -->
            <!-- <div class="cancel-button" @click="$emit('close')">
                  <img src="../assets/images/plus.svg" alt="">
                </div> -->
            <div class="cancel-button" @click="toggleModal">
              <img src="../assets/images/plus.svg" alt="">
            </div>
          </div>

          <p>I'm a modal, you know what I mean</p>
          <p>And I do my little turn on the component</p>

        </div>
      </div>

    </div>
  </section>



</template>
<script>
export default {
  name: 'Modals',

  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    }
  }
}
</script>
<style lang="scss" scoped>
.btn {
  background-color: var(--mid-grey);
  border-radius: var(--border-radius-small);
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  color: var(--dark-grey);
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 0 10px var(--button-box-shadow-color);
  }
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);

  &:hover {
    background-color: var(--primary-color-hover);
  }
}

.cancel-button {
  rotate: 45deg;
  transition: all 0.2s ease-in-out;

  &:hover {
    scale: 1.1;
  }
}

.modal {
  position: fixed;
  width: 100%;
  height: 100%;
}

.modal .modal-background {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #fafafa;
  opacity: 0.9;
  z-index: 5;
}

.modal .card {
  position: fixed;
  z-index: 10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 8px;
  width: 80vw;
  max-width: 600px;
  padding: 30px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.16);
}

.modal .card-header {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
}
</style>