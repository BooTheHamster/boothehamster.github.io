/**
 * Описание проекта.
 */
export class Project {
    constructor (name: string, description: string, sourceCodeUrl: string, demoUrl: string | null, hashTags: string) {
        this.name = name;
        this.description = description;
        this.hashTags = (hashTags) ? hashTags.split(",") : [];
        this.sourceCodeUrl = sourceCodeUrl;
        this.demoUrl = demoUrl;
        this.hasSourceCodeUrl = (!!sourceCodeUrl) && (sourceCodeUrl.trim().length > 0);
        this.hasDemoUrl = (!!demoUrl) && (demoUrl.trim().length > 0);
    }

    /**
     *  Идентификатор проекта.
     */
    public readonly name: string;

    /**
     * Описание проекта.
     */
    public readonly description: string;

    /**
     * Список хештегов проекта.
     */
    public readonly hashTags: string[];

    /**
     * Ссылка на исходный код.
     */
    public readonly sourceCodeUrl: string;

    /**
     * Признак наличия ссылки на исходный код.
     */
    public readonly hasSourceCodeUrl: boolean;

    /**
     * Ссылка на демонстрационный сайт с проектом.
     */
    public readonly demoUrl: string | null;

    /**
     * Признак наличия ссылки на демонстрационный сайт.
     */
    public readonly hasDemoUrl: boolean;
}

