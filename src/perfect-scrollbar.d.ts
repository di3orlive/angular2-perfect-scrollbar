declare namespace Ps {
	export function update(element:any):void;
	export function destroy(element:any):void;
	export function initialize(element:any):void;
}

declare module "perfect-scrollbar" {
	export = Ps;
}
