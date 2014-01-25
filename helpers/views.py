class AppendToContextMixin(object):

    def append_to_context(self, append={}, **kwargs):
        context = self.get_context_data(**kwargs)
        updated_context = dict(context.items() + append.items())
        return updated_context
