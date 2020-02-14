export class AccordionHelper {

    public index       = -1;
    public indexBefore = -1;

    public ToggleAccordion(index: number) {
        (this.index == index) ? this.CloseAccordion(): this.OpenAccordion(index);
    }

    public OpenAccordion(index: number) {
        this.SetIndex(index);
    }

    public CloseAccordion() {
        this.index = -1;
    }

    public SetIndex(index: number) {
        this.indexBefore = this.index;
        this.index       = index;
    }

    public GetIndex() {
        return this.index;
    }

    public GetIndexBefore() {
        return this.indexBefore;
    }

}