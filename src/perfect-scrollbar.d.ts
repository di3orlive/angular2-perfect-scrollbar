declare namespace Ps {
	export function initialize(element:any):void;
	export function update(element:any):void;
}

declare module "perfect-scrollbar" {
	export = Ps;
}
