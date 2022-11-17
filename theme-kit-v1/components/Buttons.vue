<template>
  <section id="buttons" class="mf-buttons wrapper">
    <!-- Buttons -->
    <div class="inner-wrapper">
      <h2>Buttons</h2>

        <div class="button-container basic-buttons">
          <h5>Basic Buttons</h5>
          <div class="flex">
            <button class="btn">
              Default
            </button>

             <button class="btn btn-disabled">
              Disabled
            </button>

            <button class="btn btn-primary">
              Primary
            </button>

            <button class="btn btn-secondary">
              Secondary
            </button>

            <button class="btn btn-border-primary">
              Border Primary
            </button>

            <button class="btn btn-border-secondary">
              Border Secondary
            </button>
          </div>
        </div>

        <div class="button-container color-buttons">
          <h5>Color Buttons</h5>
          <div class="flex">
            <button class="btn btn-red">
              Red
            </button>
            
            <button class="btn btn-orange">
              Orange
            </button>

             <button class="btn btn-yellow">
              Yellow
            </button>

            <button class="btn btn-olive">
              Olive
            </button>

            <button class="btn btn-green">
              Green
            </button>

            <button class="btn btn-teal">
              Teal
            </button>
            
            <button class="btn btn-blue">
              Blue
            </button>

            <button class="btn btn-violet">
              Violet
            </button>

            <button class="btn btn-purple">
              Purple
            </button>

            <button class="btn btn-pink">
              Pink
            </button>

            <button class="btn btn-brown">
              Brown
            </button>

            <button class="btn btn-grey">
              Grey
            </button>

            <button class="btn btn-black">
              Black
            </button>
          </div>
        </div>

        <div class="button-container label-buttons">
          <h5>Labelled Buttons</h5>
          <div class="flex">
            <div class="btn btn-label">
              <button class="btn">Click</button>
              <div class="label">2345</div>
            </div>
          </div>
        </div>

        <div class="button-container group-buttons">
          <h5>Grouped Buttons</h5>
          <div class="flex">
            <div class="btn-group">
              <button class="btn">One</button>
              <button class="btn">Two</button>
              <button class="btn">Three</button>
            </div>
          </div>
        </div>

        <div class="button-container conditional-buttons">
          <h5>Conditional Buttons</h5>
          <div class="flex">
            <div class="btn-conditional">
              <button class="btn">Cancel</button>
              <button class="btn">Save</button>
            </div>
          </div>
        </div>

    </div>

  </section>
</template>

<style lang="scss" scoped>
.flex {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.button-container {
  margin-bottom: 2rem;
}

// -------------
// Basic Buttons
// -------------

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
    // border-color: var(--mid-grey);
    box-shadow: 0 0 10px var(--button-box-shadow-color);
  }
}

.btn-disabled {
  color: #999;

  &:hover {
    box-shadow: none;
  }
}

.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);

  &:hover {
    background-color: var(--primary-color-hover);
  }
}

.btn-secondary {
  background-color: var(--secondary-color);
  color: var(--white);

  &:hover {
    background-color: var(--secondary-color-hover);
  }
}

.btn-border-primary {
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);

  &:hover {
    background-color: var(--primary-color);
    border: 2px solid var(--primary-color);
    color: var(--white);
  }
}

.btn-border-secondary {
  background-color: transparent;
  border: 2px solid var(--secondary-color);
  color: var(--secondary-color);

  &:hover {
    background-color: var(--secondary-color);
    border: 2px solid var(--secondary-color);
    color: var(--white);
  }
}

// -------------
// Color Buttons
// -------------

.btn-red {
  background-color: red;
  color: var(--white);
}

.btn-orange {
  background-color: orange;
  color: var(--dark-grey);
}

.btn-yellow {
  background-color: yellow;
  color: var(--dark-grey);
}

.btn-olive {
  background-color: olive;
  color: var(--white);
}

.btn-green {
  background-color: green;
  color: var(--white);
}

.btn-teal {
  background-color: teal;
  color: var(--white);
}

.btn-blue {
  background-color: blue;
  color: var(--white);
}

.btn-violet {
  background-color: violet;
  color: var(--dark-grey);
}

.btn-purple {
  background-color: purple;
  color: var(--white);
}

.btn-pink {
  background-color: pink;
  color: var(--dark-grey);
}

.btn-brown {
  background-color: brown;
  color: var(--white);
}

.btn-grey {
  background-color: grey;
  color: var(--white);
}

.btn-black {
  background-color: black;
  color: var(--white);
}

// ----------------
// Labelled Buttons
// ----------------

.btn-label {
  display: flex;
  background-color: transparent;
  padding: 0;
  border: 2px solid var(--secondary-color);
  color: var(--white);
  cursor: initial;

  button, .label {
    padding: 1rem 2rem;
  }

  button {
    background-color: var(--secondary-color);  
    color: var(--white);
    border: none;
    border-radius: 0;
    cursor: pointer;

    &:hover {
      background-color: var(--secondary-color-hover);
    }
  }

  .label {
    position: relative;
    background-color: white;
    color: var(--secondary-color);
    cursor: initial;

    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-right: 6px solid white;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      top: 50%;
      left: -5px;
      transform: translateY(-50%);
    }
  }
}

// ---------------
// Grouped Buttons
// ---------------

.btn-group {
  border-radius: var(--border-radius-small);
  .btn {
    border-radius: 0;
    color: var(--white);
    background-color: var(--secondary-color);

    &:first-of-type {
      border-radius: 4px 0 0 4px;
    }
    &:last-of-type {
      border-radius: 0 4px 4px 0;
    }
    &:hover {
      box-shadow: none;
      background-color: var(--secondary-color-hover)
    }
  }
}
// -------------------
// Conditional Buttons
// -------------------

.btn-conditional {
  display: flex;
  gap: 4px;
  .btn {
    
    &:first-of-type {
      
      background-color: var(--mid-grey);
      border-radius: 4px 0 0 4px;

      
    }
    &:last-of-type {
      background-color: var(--secondary-color);
      border-radius: 0 4px 4px 0;
      color: var(--white);
      position: relative;

      &:after {
        content: "or";
        cursor: initial;
        color: var(--dark-grey);
        line-height: 30px;
        position: absolute;
        width: 30px;
        height: 30px;
        left: -17px;
        top: 50%;
        transform: translateY(-50%);
        background-color: var(--white);
        border-radius: 100%;
      }

      &:hover {
        background-color: var(--secondary-color-hover);
      }
    }
  }
}

</style>