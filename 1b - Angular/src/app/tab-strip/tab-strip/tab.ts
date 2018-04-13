import Item from "../tab-container/item";

export default class Tab
{
	public constructor(public id: number, public tabName: string) { }

	public content: Item;
}