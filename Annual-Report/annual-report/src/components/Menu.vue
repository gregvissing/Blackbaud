<template>
    <div class="nav-container">
        <div id="sideNav" class="bm-menu">
			<img class="navLogo" src="https://foundation.uc.edu/image/annual-report/2018/logo-ucFoundation.png">
            <nav class="bm-item-list">
                <slot></slot>
            </nav>
            <span class="bm-cross-button cross-style" @click="closeMenu" :class="{ hidden: !crossIcon }">
                <span v-for="(x, index) in 2" :key="x" class="bm-cross" :style="{ position: 'absolute', width: '3px', height: '30px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}">
                </span>
            </span>
        </div>
		<div class="menu-container">
			<div class="bm-burger-button" @click="openMenu" :class="{ hidden: !burgerIcon }">
				<span class="bm-burger-bars line-style" :style="{top:20 * (index * 2) + '%'}" v-for="(x, index) in 3" :key="index"></span>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
		name: 'menubar',
		data() {
			return {
				isSideBarOpen: false,
				windowWidth: 0
			};
		},
		props: {
			isOpen: {
				type: Boolean,
				required: false
			},
			right: {
				type: Boolean,
				required: false
			},
			width: {
				type: [String],
				required: false,
				default: '300'
			},
			disableEsc: {
				type: Boolean,
				required: false
			},
			noOverlay: {
				type: Boolean,
				required: false
			},
			onStateChange: {
				type: Function,
				required: false
			},
			burgerIcon: {
				type: Boolean,
				required: false,
				default: true
			},
			crossIcon: {
				type: Boolean,
				required: false,
				default: true
			}
		},
		methods: {
			openMenu() {
				this.$emit('openMenu');
				this.isSideBarOpen = true;

				if (!this.noOverlay) {
					document.body.className += 'bm-overlay';
				}
				if (this.right) {
					document.querySelector('.bm-menu').style.left = 'auto';
					document.querySelector('.bm-menu').style.right = '0px';
				}
				this.$nextTick(function() {
					document.getElementById('sideNav').style.width = this.width
					? this.width + 'px'
					: '300px';
				});
			},
			closeMenu() {
				this.$emit('closeMenu');
				this.isSideBarOpen = false;
				document.body.className = document.body.className.replace(
					'bm-overlay',
					''
				);
				document.getElementById('sideNav').style.width = '0px';
			},
			closeMenuOnEsc(e) {
				e = e || window.event;
				if (e.key === 'Escape' || e.keyCode === 27) {
					document.getElementById('sideNav').style.width = '0px';
					document.body.style.backgroundColor = 'inherit';
					this.isSideBarOpen = false;
				}
			},
			documentClick(e) {
				let element = document.querySelector('.bm-burger-button');
				let target = e.target;
				if (
					element !== target &&
					!element.contains(target) &&
					e.target.className !== 'bm-menu' &&
					this.isSideBarOpen
				) {
					this.closeMenu();
				}
			},
			getWindowWidth(event) {
				this.windowWidth = document.documentElement.clientWidth;
			}
		},
		mounted() {
			if (!this.disableEsc) {
				document.addEventListener('keyup', this.closeMenuOnEsc);
			}
			this.$nextTick(function() {
				window.addEventListener('resize', this.getWindowWidth);
				//Init
				this.getWindowWidth()
			})
		},
		created: function() {
			document.addEventListener('click', this.documentClick);
		},
		beforeDestroy() {
			window.removeEventListener('resize', this.getWindowWidth);
		},
		destroyed: function() {
			document.removeEventListener('keyup', this.closeMenuOnEsc);
			document.removeEventListener('click', this.documentClick);
		},
		watch: {
			isOpen: {
				deep: true,
				immediate: true,
				handler(newValue, oldValue) {
					if (!oldValue && newValue) {
						this.openMenu()
					}
					if (oldValue && !newValue) {
						this.closeMenu()
					}
				}
			},
			right: {
				deep: true,
				immediate: true,
				handler(oldValue, newValue) {
					if (oldValue) {
						this.$nextTick(() => {
							// document.querySelector('.bm-burger-button').style.left = 'auto';
							// document.querySelector('.bm-burger-button').style.right = 'auto';
							document.querySelector('.bm-menu').style.left = 'auto';
							document.querySelector('.bm-menu').style.right = '0px';
						});
					}
					if (newValue) {
						if (
							document.querySelector('.bm-burger-button').hasAttribute('style')
						) {
							document
							.querySelector('.bm-burger-button')
							.removeAttribute('style');
							document.getElementById('sideNav').style.right = 'auto';
						}
					}
				}
			}
		}
    };
</script>

<style lang="scss">
	@import "../assets/scss/_base.scss";
	html {
		height: 100%;
	}
	.menu-container {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 40px;
		background: $red;
		z-index: 999;
		.bm-burger-button {
			position: relative;
			width: 36px;
			height: 30px;
			left: 0%;
			top: 0;
			bottom: 0;
			z-index: 999;
			width: 100%;
			cursor: pointer;
			margin-top: 5px;
			&.hidden {
				display: none;
			}
			.bm-burger-bars {
				background-color: $white;
				width: 36px;
				margin: auto;
				&.line-style {
					position: absolute;
					height: 20%;
					left: 0;
					right: 0;
				}
			}
		}
	}
	
	.bm-cross-button {
		height: 24px;
		width: 24px;
		&.cross-style {
			position: absolute;
			bottom: 12px;
			right: 0;
			left: 0;
			margin: auto;
			cursor: pointer;
			.bm-cross {
				background: $white;
			}
		}
		&.hidden {
			display: none;
		}
	}
	
	.bm-overlay {
		background: rgba(0, 0, 0, 0.3);
	}

	#sideNav {
		&.bm-menu {
			height: 100%; /* 100% Full-height */
			width: 0; /* 0 width - change this with JavaScript */
			position: fixed; /* Stay in place */
			z-index: 1000; /* Stay on top */
			top: 0;
			left: 0;
			background-color: rgb(63, 63, 65); /* Black*/
			overflow-x: hidden; /* Disable horizontal scroll */
			padding-top: 80px; /* Place content 60px from the top */
			transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
			.navLogo {
				width: 180px;
				margin-left: 20px;
				position: absolute;
				top: 2em;
			}
			.bm-item-list {
				color: #b8b7ad;
				margin-left: 20px;
				font-size: 20px;
				> * {
					display: flex;
					text-decoration: none;
					padding: 0.7em;
					> span {
						margin-left: 10px;
						font-weight: 700;
						color: white;
					}
				}
				.fa {
					color: #ffffff;
				}
			}
		}
	}
</style>

