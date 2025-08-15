import{d as n}from"./define-BW8gZLxC.js";n({root:document.getElementById("cell-4"),expanded:[],variables:[]},{id:4,body:(t,i)=>{const e=t.html`<div class="open">
    <svg width="30" height="15">
        <path d="M 16 0 30 15" stroke="black"></path>
        <path d="M 14 0 0 15" stroke="black"></path>
    </svg>
    <div>OPEN</div>
</div>
<style>
	@keyframes swing {
		0% {
			transform: rotate(-10deg);
		}
		100% {
			transform: rotate(10deg);
		}
	}

	.open {
		/* position: absolute; */
		display: flex;
		flex-direction: column;
		align-items: center;
		top: 73%;
		left: 45%;
		font-family: 'watkins';
		font-size: 12px;
		animation: swing 2s ease-in-out infinite alternate;
		transform-origin: top center;
	}
	.open > svg {
		display: block;
	}
	.open > div {
		border: 1px solid black;
		padding: 4px 4px 2px 4px;
		border-radius: 4px;
	}
</style>`;return i(e),{sign:e}},inputs:["htl","display"],outputs:["sign"],output:void 0,assets:void 0,autodisplay:!1,autoview:void 0,automutable:void 0});
