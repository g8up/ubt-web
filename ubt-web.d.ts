// TypeScript Version: 2.2


declare const UBT: InternalUBT

interface InternalUBT {
  send<TContext extends object>(type?: string, params?: TContext): void
  
  bind<TContext extends object>(type?: string, params?: TContext): InternalUBT
  
  bindType(type: string): InternalUBT
  
  bindData<TContext extends object>(data: TContext): InternalUBT
}
