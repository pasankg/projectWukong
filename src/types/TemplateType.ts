export interface ParentRow {
 type: string,
 flexDirection: string,
 alignItems: string,
 children: ChildrenRow[],
 input: string
}

export interface ChildrenRow {
 type: string,
 flexDirection: string,
 alignItems: string,
 variant: string,
 input: string,
 children: ChildrenRow[]
}

export type TemplateRow = Record<string, string>
export type TemplateObject = any