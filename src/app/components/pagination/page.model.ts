export class Page {

    actualPage: number = 1;
    limit: number = 10;
    offset: number = 0;
    nextPageNumber: number;
    prevPageNumber: number;

    numberOfPages?: number;

    total?: number;

    prev() {
        if (this.actualPage > 1) {
            this.actualPage--;
            this.getOffset();
        }
    }

    next() {
        if (this.actualPage <= this.numberOfPages) {
            this.actualPage++;
            this.getOffset();
        }
    }

    getOffset() {
        this.nextPageNumber = this.actualPage + 1;
        this.prevPageNumber = this.actualPage - 1;
        this.offset = this.limit * (this.actualPage - 1);
    }

    getNumberOfPages() {
        if (this.total) this.numberOfPages = Math.round(this.total / this.limit);
    }


}